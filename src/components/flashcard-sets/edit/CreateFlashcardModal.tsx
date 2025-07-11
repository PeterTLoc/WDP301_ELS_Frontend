"use client";
import React, { useState } from "react";

export default function CreateFlashcardModal({
  isOpen,
  onClose,
  onCreate,
  initialEnglish = "",
  initialVietnamese = "",
  mode = "create",
}: {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (englishContent: string, vietnameseContent: string) => void;
  initialEnglish?: string;
  initialVietnamese?: string;
  mode?: "create" | "edit";
}) {
  const [englishContent, setEnglishContent] = useState(initialEnglish);
  const [vietnameseContent, setVietnameseContent] = useState(initialVietnamese);

  // Reset fields when modal opens/closes or mode/initial values change
  React.useEffect(() => {
    if (isOpen) {
      setEnglishContent(initialEnglish);
      setVietnameseContent(initialVietnamese);
    }
  }, [isOpen, initialEnglish, initialVietnamese]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#202020] border border-[#1D1D1D] rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">
            {mode === "edit" ? "Edit Flashcard" : "Create Flashcard"}
          </h2>
          <button
            onClick={onClose}
            className="text-[#CFCFCF] hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            onCreate(englishContent, vietnameseContent);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-[#CFCFCF] mb-2">
              English Content *
            </label>
            <textarea
              value={englishContent}
              onChange={e => setEnglishContent(e.target.value)}
              rows={3}
              className="w-full p-3 bg-[#2D2D2D] border border-[#1D1D1D] rounded-md text-white placeholder-[#CFCFCF] focus:outline-none focus:border-[#4CC2FF] resize-none"
              placeholder="Enter English content"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#CFCFCF] mb-2">
              Vietnamese Content *
            </label>
            <textarea
              value={vietnameseContent}
              onChange={e => setVietnameseContent(e.target.value)}
              rows={3}
              className="w-full p-3 bg-[#2D2D2D] border border-[#1D1D1D] rounded-md text-white placeholder-[#CFCFCF] focus:outline-none focus:border-[#4CC2FF] resize-none"
              placeholder="Enter Vietnamese content"
              required
            />
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-[#2b2b2b] text-white font-semibold rounded-md hover:bg-[#373737] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-[#4CC2FF] text-black font-semibold rounded-md hover:bg-[#3AA0DB] transition-colors flex items-center justify-center gap-2"
            >
              {mode === "edit" ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
