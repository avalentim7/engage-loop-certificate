import React from 'react';
import certificate from '../certificateContent.json';

export const CertificateContent = (user) => {
    console.log(certificate)
    console.log(user)
    console.log(user.user)
    return (
        <div
            className="certificate-content"
            dangerouslySetInnerHTML={{
                __html: certificate.certificateContent2
                    .replace('{{UserName}}', `<b>${user.user.UserName}</b>`)
                    .replace('{{Date}}', `<b>${user.user.Date}</b>`)
            }}>
        </div>
    )
}