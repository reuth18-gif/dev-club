"use client";

import { useCallback, useRef, useState } from "react";

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ACCEPTED_EXTENSIONS = ".pdf,.docx";

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
      />
    </svg>
  );
}

function isAcceptedFile(file: File) {
  const ext = file.name.toLowerCase();
  return (
    ACCEPTED_TYPES.includes(file.type) ||
    ext.endsWith(".pdf") ||
    ext.endsWith(".docx")
  );
}

export function CvUploadZone() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files?.length) return;
    const next = files[0];
    if (!isAcceptedFile(next)) {
      setError("Please upload a PDF or DOCX file.");
      setFile(null);
      return;
    }
    setError(null);
    setFile(next);
  }, []);

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className="space-y-3">
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        onClick={() => inputRef.current?.click()}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-14 text-center transition-all duration-300 ${
          isDragging
            ? "border-forest bg-forest/5 shadow-[0_4px_20px_rgba(27,59,43,0.1)]"
            : "border-border-soft bg-cream hover:border-forest/30 hover:bg-hero-green/10"
        }`}
        aria-label="Upload your CV"
      >
        <span
          className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
            isDragging ? "bg-forest text-cream" : "bg-hero-green/40 text-forest"
          }`}
        >
          <UploadIcon className="h-7 w-7" />
        </span>
        <p className="text-base font-medium text-forest">
          Drag & drop your CV here or browse
        </p>
        <p className="mt-2 text-sm text-olive-light">
          Supports PDF and DOCX · Max 10MB
        </p>
        {file && (
          <p className="mt-4 rounded-full bg-forest/10 px-4 py-1.5 text-sm font-medium text-forest">
            {file.name}
          </p>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_EXTENSIONS}
        className="sr-only"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {error && (
        <p className="text-sm text-[var(--status-rejected-text)]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
