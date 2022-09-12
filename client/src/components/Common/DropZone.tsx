import React, { FC, ReactNode, useRef, useState } from "react";
import MediaFile from "../Icons/MediaFile";
import XIcon from "../Icons/XIcon";

interface IProps {
  children?: ReactNode;
}
const DropZone: FC<IProps> = ({ children }) => {
  const [fileUrl, setFileUrl] = useState<string>();
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const savedTargetRef = useRef<EventTarget | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileDrop = (file: File) => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const fileURL = fileReader.result;
        setFileUrl(fileURL as string);
      };
      fileReader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div
        className="flex flex-col items-center justify-center w-full h-full"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDragEnter={(e) => {
          e.preventDefault();
          e.stopPropagation();
          savedTargetRef.current = e.target;
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          if (savedTargetRef.current !== e.target) return;
          e.preventDefault();
          e.stopPropagation();
          setIsDragging(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleFileDrop(e.dataTransfer.files[0]);
          setIsDragging(false);
        }}
      >
        <div
          className={`absolute inset-0 z-10 select-none pointer-events-none ${
            isDragging
              ? "border-dashed border-2 border-bluePrimary bg-bluePrimary bg-opacity-10"
              : ""
          }`}
        ></div>
        <span
          className={`transition-all ${
            isDragging ? "text-bluePrimary" : "text-blackPrimary"
          }`}
        >
          <MediaFile></MediaFile>
        </span>
        <p className="my-3 text-grayPrimary">Drag photos and video here</p>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="px-3 py-2 text-sm font-semibold text-white rounded-md cursor-pointer bg-bluePrimary"
        >
          Select from computer
        </button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        name="filePost"
        id="filePost"
        className="hidden"
        onChange={(e) => handleFileDrop((e.target.files as FileList)[0])}
        accept="image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime"
      />
      {fileUrl && (
        <div className="absolute w-full h-full">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={fileUrl}
            alt="img"
          />
          <span
            className="absolute cursor-pointer top-4 right-4"
            onClick={() => setFileUrl("")}
          >
            <XIcon></XIcon>
          </span>
        </div>
      )}
      {children}
    </>
  );
};

export default DropZone;
