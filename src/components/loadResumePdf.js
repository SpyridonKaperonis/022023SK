import React, { Component, useState} from 'react';
import { Document, Page } from 'react-pdf';

export const LoadResumePdf = () => {

    const [numPages, setnumPages] = useState(null);
    const [pageNumber, setpageNumber] = useState(1);
    const state = { numPages: null, pageNumber: 1 };

    const onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    const goToPrevPage = () =>
        setpageNumber(+1)
    const goToNextPage = () =>
        this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));



    return (
        <div>
            <nav>
                <button onClick={goToPrevPage}>Prev</button>
                <button onClick={goToNextPage}>Next</button>
            </nav>

            <div style={{ width: 600 }}>
                <Document
                    file="/example.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} width={600} />
                </Document>
            </div>

            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );

}
