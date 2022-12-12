import React from "react";

function fromSection() {
  return (
    <div className="container relative mx-auto top-10">
      <div className="text-center">Sampaikan sesuatu untuk kami</div>
      <div>
        <div className="mx-5 space-y-10">
          <input
            type="text"
            placeholder="Nama Kamu"
            id="large-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-md focus:ring-[#C0AD82] focus:border-[#C0AD82]"
          />
          <textarea
            type="textArea"
            placeholder="Tulis pesan untuk mempelai"
            id="large-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-md focus:ring-[#C0AD82] focus:border-[#C0AD82]"
          />
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 border border-[#C0AD82] rounded bg-gray-50 focus:ring-3 focus:ring-[#C0AD82] "
                required=""
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-[#C0AD82]"
            >
              InsyaAllah saya akan hadir.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default fromSection;
