import React from 'react';
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume(props) {
    return (
        <Button
            variant="primary"
            href={props.resumePath}
            target="_blank"
            style={{ maxWidth: "250px" }}
        >
            <AiOutlineDownload />
            &nbsp;Download CV
        </Button>
    )
}

export default Resume