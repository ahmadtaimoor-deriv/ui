/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, ReactNode, useCallback, useState } from "react";
import { useDropzone, DropzoneOptions } from "react-dropzone";

import "./Dropzone.scss";

type TFileDropzone = DropzoneOptions & {
    variant?: "default" | "p2p";
    children?: ReactNode;
    className?: string;
    errorMessage: string;
    filenameLimit?: number;
    hoverMessage: string;
    maxSize?: number;
    message?: ReactNode | ((open?: () => void) => ReactNode);
    previewSingle?: ReactElement;
    validationErrorMessage?: ReactNode | ((open?: () => void) => ReactNode);
    value: (File & { file: Blob })[];
    dropzoneTimeout?: number;
};

const UploadIcon = () => (
    <svg
        width="30"
        height="32"
        viewBox="0 0 30 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clip-path="url(#clip0_7089_50388)">
            <path
                d="M16.5134 0.587891C15.6763 -0.193359 14.317 -0.193359 13.4799 0.587891L4.90848 8.58789C4.07143 9.36914 4.07143 10.6379 4.90848 11.4191C5.74554 12.2004 7.10491 12.2004 7.94196 11.4191L12.8571 6.83164V20.0004C12.8571 21.1066 13.8147 22.0004 15 22.0004C16.1853 22.0004 17.1429 21.1066 17.1429 20.0004V6.83164L22.058 11.4191C22.8951 12.2004 24.2545 12.2004 25.0915 11.4191C25.9286 10.6379 25.9286 9.36914 25.0915 8.58789L16.5201 0.587891H16.5134ZM4.28571 22.0004C4.28571 20.8941 3.32812 20.0004 2.14286 20.0004C0.957589 20.0004 0 20.8941 0 22.0004V26.0004C0 29.3129 2.87946 32.0004 6.42857 32.0004H23.5714C27.1205 32.0004 30 29.3129 30 26.0004V22.0004C30 20.8941 29.0424 20.0004 27.8571 20.0004C26.6719 20.0004 25.7143 20.8941 25.7143 22.0004V26.0004C25.7143 27.1066 24.7567 28.0004 23.5714 28.0004H6.42857C5.2433 28.0004 4.28571 27.1066 4.28571 26.0004V22.0004Z"
                fill="#C7E5E5"
            />
        </g>
        <defs>
            <clipPath id="clip0_7089_50388">
                <rect width="30" height="32" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const HoverMessage = () => {
    return (
        <div className="deriv-dropzone__container--hover">
            <p>Drop here</p>
        </div>
    );
};

const DropZoneContainer = ({ children, ...rest }: TFileDropzone) => {
    return (
        <div className="deriv-dropzone__content">
            <div className="deriv-dropzone__icon">
                <UploadIcon />
            </div>
            {children}
        </div>
    );
};

export const FileUploader = ({
    children,
    noClick = false,
    onDrop,
    ...rest
}: TFileDropzone) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        noDrag: false,
        ...rest,
    });

    return (
        <div className="deriv-dropzone__container" {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <HoverMessage />
            ) : (
                <DropZoneContainer {...rest}>
                    {" "}
                    some default message
                </DropZoneContainer>
            )}
        </div>
    );
};
