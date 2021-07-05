import React, { useEffect } from 'react';
import { CertificateContent } from './CertificateContent';
import certificateBackgroundImg from '../assets/certificate-background.png';
import users from '../usersList.json';
import '../styles/Certificate.scss';

export const Certificate = () => {
    useEffect(() => {

    }, [])

    // const certificateContent = `<p style="text-align: justify;"><span style="font-size: 18px;">A TothBe - Treinamentos e Soluções Corporativas confere ao(a) aluno(a)&nbsp;{{UserName}} o presente certificado de conclusão do treinamento sobre a Lei Geral de Proteção de Dados - Lei n° 13.709/18, com foco na conscientização, com carga horária de 35 (trinta e cinco) minutos,&nbsp;na data de {{Date}}</span></p>
    //     <p style="text-align: center;"><span style="font-size: 18px;">O presente certificado tem a validade de 12 meses, a contar de sua emissão.</span></p>
    //     <p style="text-align: justify;"><span style="font-size: 11px;"><br></span></p>`;

    return (
        users.map(user => {
            return (
                <div className="certificate-print-view">
                    <h1 className="certificate-title" > </h1>
                    <img src={certificateBackgroundImg} alt="certificate-background" />
                    <CertificateContent user={user} />
                </div>
            )
        })
    )

}