import React from 'react';

const ConfirmModal = ({ open, title = 'Confirm', description, onConfirm, onCancel }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onCancel} type="button" className="px-4 py-2 rounded-md border border-gray-300">Cancel</button>
          <button onClick={onConfirm} type="button" className="px-4 py-2 rounded-md bg-red-600 text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
