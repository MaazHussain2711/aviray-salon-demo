"use client";

import { useEffect, useRef, type ReactNode } from 'react';

export function Modal({ open, onClose, labelledBy, id, children }: {
  open: boolean; onClose: () => void; labelledBy: string; id: string; children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || !open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    dialog.showModal();
    document.body.classList.add('modal-open');
    return () => {
      dialog.close();
      document.body.classList.remove('modal-open');
      previousFocus?.focus();
    };
  }, [open]);
  return <dialog ref={ref} id={id} aria-labelledby={labelledBy}
    onCancel={e => { e.preventDefault(); onClose(); }}
    onClick={e => {
      if (e.target !== e.currentTarget) return;
      const bounds = e.currentTarget.getBoundingClientRect();
      if (e.clientX < bounds.left || e.clientX > bounds.right || e.clientY < bounds.top || e.clientY > bounds.bottom) onClose();
    }}>
    <button type="button" className="dialog-close" aria-label="Close dialog" onClick={onClose}>×</button>
    {children}
  </dialog>;
}
