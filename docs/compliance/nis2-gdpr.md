# Compliance: GDPR & NIS2 (Logging, Retention, Evidence, Reviews)

This document outlines the approach to GDPR (General Data Protection Regulation) and NIS2 (Network and Information Security Directive 2) compliance for Tech Hilfe Pro NRW, focusing on logging, data retention, evidence management, and review frequencies.

## 1. Logging and Retention Policy

Effective logging is crucial for detecting security incidents, ensuring accountability, and demonstrating compliance with both GDPR and NIS2. A comprehensive logging strategy should include:

*   **What to Log**: 
    *   **Access Logs**: Records of who accessed what data, when, and from where (IP address, user agent).
    *   **System Events**: Login attempts (success/failure), configuration changes, software installations/updates, and critical system errors.
    *   **Application Events**: User registrations, data modifications, data exports, data deletion requests, and sensitive API calls.
    *   **Security Events**: Intrusion attempts, malware detections, and unauthorized access alerts.
    *   **Contact Form Submissions**: Details of submissions, including IP address and timestamp, for anti-spam and accountability purposes.
*   **Log Format**: Logs should be standardized, immutable, and include timestamps, event types, user identifiers, and relevant context.
*   **Retention Period**: Data retention periods must comply with legal requirements (e.g., commercial law, tax law) and GDPR principles (data minimization, storage limitation). Typically, security-relevant logs might be retained for 6-12 months, while data processing records might require longer retention. A clear retention schedule for different data types is essential.
*   **Secure Storage**: Logs must be stored securely, protected from unauthorized access, modification, or deletion. Centralized log management systems with encryption and access controls are recommended.

## 2. Evidence (Nachweise)

Demonstrating compliance requires maintaining clear and accessible evidence. This includes:

*   **Documentation**: 
    *   **Data Processing Activities (Verzeichnis von Verarbeitungstätigkeiten)**: Detailed records of all data processing operations, purposes, categories of data subjects, and recipients.
    *   **Data Protection Impact Assessments (DPIAs)**: For high-risk processing activities.
    *   **Technical and Organizational Measures (TOMs)**: Documentation of security controls, access management policies, encryption standards, and incident response plans.
    *   **Consent Records**: Proof of consent for data processing where required.
    *   **Contracts with Processors**: Agreements with third-party data processors (e.g., cloud providers, payment gateways) ensuring GDPR compliance.
*   **Audit Trails**: The `audit_logs` table in the D1 database serves as a central repository for security-relevant events, providing an immutable record of actions within the system.
*   **Incident Response Records**: Documentation of all security incidents, including detection, response, and post-incident analysis.

## 3. Review Frequency (Review-Frequenz)

Regular reviews are vital to ensure that compliance measures remain effective and up-to-date with evolving threats and regulations.

*   **Annual Reviews**: 
    *   **Data Protection Policies**: Review and update privacy policies, data retention schedules, and TOMs at least annually, or whenever significant changes occur in data processing activities or legal requirements.
    *   **Risk Assessments**: Conduct annual risk assessments for data processing and information security (NIS2).
    *   **Contracts with Processors**: Review contracts with third-party processors to ensure ongoing compliance.
*   **Quarterly Reviews**: 
    *   **Access Controls**: Periodically review user access rights and permissions.
    *   **Security Logs**: Conduct quarterly reviews of security logs for anomalies or suspicious activities.
*   **Ad-hoc Reviews**: 
    *   **Incident Response**: Review incident response plans after any security incident or major system change.
    *   **New Technologies/Services**: Assess compliance implications before implementing new technologies or services.

By adhering to these guidelines, Tech Hilfe Pro NRW can build a robust framework for GDPR and NIS2 compliance, ensuring data protection and information security.
