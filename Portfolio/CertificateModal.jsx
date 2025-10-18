// CertificatesModal.jsx
import { useEffect } from "react";
import { FiX, FiDownload, FiExternalLink } from "react-icons/fi";

const CertificatesModal = ({ open, onClose, cert }) => {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open || !cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal content */}
      <div className="relative z-10 w-full max-w-6xl mx-4 sm:mx-6 my-8 sm:my-12 bg-[#071021] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[calc(100vh-96px)]">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full bg-gradient-to-b from-slate-900/40 to-transparent flex items-center justify-center p-4 md:p-6">
          <img
            src={cert.img}
            alt={cert.title}
            className="max-h-[70vh] md:max-h-full w-full object-contain rounded-lg"
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 w-full p-5 md:p-8 overflow-y-auto">
          {/* Close Button */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Issued by <span className="font-medium text-teal-300">{cert.issuer}</span>
              </p>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="ml-3 inline-flex items-center justify-center p-2 rounded-md bg-white/6 hover:bg-white/10 transition"
            >
              <FiX className="text-white" size={20} />
            </button>
          </div>

          <hr className="my-4 border-slate-700" />

          {/* Metadata */}
          <div className="text-sm text-gray-300 space-y-3">
            <p>
              <span className="font-medium text-gray-200">Completed:</span>{" "}
              <span className="text-gray-300">Jan 2025</span>
            </p>

            <p>
              <span className="font-medium text-gray-200">Skills learned:</span>{" "}
              <span className="text-gray-300">Web Development, React, Django, Python</span>
            </p>

            <p>
              <span className="font-medium text-gray-200">Description:</span>{" "}
              <span className="text-gray-300">
                This certificate confirms successful completion of the course and demonstrates
                practical experience in the subject matter, project work, and assessments.
              </span>
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              {/* Download (opens image in new tab / tries to download) */}
              <a
                href={cert.img}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-medium transition"
              >
                <FiDownload /> Download
              </a>

              {/* Open original (new tab) */}
              <a
                href={cert.img}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-transparent border border-slate-700 hover:bg-slate-800 text-white font-medium transition"
              >
                <FiExternalLink /> Open original
              </a>
            </div>

            {/* Extra: issuer details or notes */}
            <div className="mt-6 p-4 rounded-md bg-white/3">
              <h4 className="text-sm font-semibold text-white">Issuer details</h4>
              <p className="text-xs text-gray-300 mt-2">
                {cert.issuer} — Verified certificate (if applicable). You can download the image
                or open it in a new tab. For a PDF version, upload the image to a converter or check
                the original issuers portal.
              </p>
            </div>

            <div className="mt-6 text-xs text-gray-400">
              Tip: press <kbd className="px-2 py-1 bg-white/6 rounded">Esc</kbd> to close.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesModal;
