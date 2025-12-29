export const metadata = {
  title: 'Privacy Policy — Thread Attachments for Gmail™',
  description: 'Privacy Policy for Thread Attachments for Gmail™ — explains data collection, use, and Google Limited Use compliance.',
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow">
        <h1 className="text-3xl font-extrabold mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-600 mb-6">Thread Attachments for Gmail™</p>
        <p className="text-sm text-slate-600 mb-8"><strong>Effective date:</strong> December 29, 2025</p>

        <section className="prose prose-slate">
          <h2>Introduction</h2>
          <p>
            Thread Attachments for Gmail™ (the “Extension”) helps users find and download attachments from their Gmail threads. This Privacy Policy explains what information the Extension collects, how it is used, how it is (and is not) shared, and the security measures in place. By installing or using the Extension you agree to the terms below.
          </p>

          <h2>Information We Collect</h2>
          <p>
            The Extension requests the Google OAuth permission <code>gmail.readonly</code> and accesses the following data via the Gmail API:
          </p>
          <ul>
            <li><strong>Email metadata only:</strong> message headers and metadata necessary to identify messages (e.g., message IDs, thread IDs, sender/recipient names and addresses, subject, date).</li>
            <li><strong>Attachment identifiers and metadata:</strong> attachment IDs, filenames, MIME types, sizes, and other metadata required to present and download attachments.</li>
            <li><strong>Authentication tokens:</strong> OAuth tokens issued by Google to enable API access; tokens are managed by Google’s OAuth flow.</li>
          </ul>
          <p>The Extension does not request or collect full email message bodies or message content beyond the metadata and attachment identifiers above. The Extension does not collect analytics, telemetry, or tracking data.</p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li><strong>Provide core functionality:</strong> to display a list of attachments associated with your Gmail messages and threads and to generate in-browser download links so you can download attachments directly to your device.</li>
            <li><strong>Local processing only:</strong> all presentation and processing of Gmail metadata and attachment identifiers occurs locally in your browser (client-side). The Extension does not use the data for advertising, profiling, or analytics.</li>
            <li><strong>No automated decisions:</strong> we do not use your email data for automated decision-making or profiling.</li>
          </ul>

          <h2>Data Sharing &amp; Disclosure</h2>
          <ul>
            <li><strong>No sharing with third parties:</strong> we do not transfer, sell, rent, or otherwise share your Gmail metadata or attachment identifiers with any third parties.</li>
            <li><strong>No external servers:</strong> the Extension does not send your Gmail data to external servers or cloud services controlled by the developer or third parties. All processing happens within your browser.</li>
            <li><strong>Legal exceptions:</strong> we may disclose information if required by law (e.g., valid subpoena), to comply with legal process, or to protect rights and safety. Any disclosure will be limited to what is legally required.</li>
          </ul>

          <h2>Storage &amp; Retention</h2>
          <p>The Extension does not permanently store copies of your emails, message bodies, or attachment contents on any external server. It may temporarily cache metadata or identifiers in browser memory or extension storage solely to support the UI and user session; this data is not transmitted off the device and can be cleared by signing out, uninstalling the Extension, or clearing the Extension cache.</p>

          <h2>Security</h2>
          <ul>
            <li><strong>Local-only processing:</strong> processing in the browser reduces risk of external exposure.</li>
            <li><strong>Secure connections:</strong> the OAuth flow and Google API interactions use HTTPS/TLS as required by Google.</li>
            <li><strong>Least privilege:</strong> the Extension requests only the <code>gmail.readonly</code> scope.</li>
            <li><strong>No guarantees:</strong> while reasonable measures are taken, no system is completely secure; contact the developer if you discover a security issue.</li>
          </ul>

          <h2>Compliance with Google API Services User Data Policy — Limited Use</h2>
          <p>The Extension complies with the Google API Services User Data Policy, including the Limited Use requirements. Specifically:</p>
          <ul>
            <li>Data accessed via the Gmail API is used only to provide the Extension’s core functionality (display attachments and generate download links).</li>
            <li>Data is not transferred to or shared with third parties.</li>
            <li>Data is not used for advertising, marketing, analytics, or profiling.</li>
            <li>The Extension requests only the <code>gmail.readonly</code> scope required to deliver functionality.</li>
          </ul>

          <h2>Your Choices and Rights</h2>
          <ul>
            <li><strong>Revoke access:</strong> remove the Extension’s permissions in your Google Account at https://myaccount.google.com/permissions. After revocation the Extension will no longer read your Gmail metadata or attachment identifiers.</li>
            <li><strong>Uninstall:</strong> uninstalling the Extension removes it from your browser and stops further access.</li>
            <li><strong>Data removal requests:</strong> because we do not store Gmail messages or attachments externally, there is no user data on our servers to delete. If residual local data exists in the Extension, clear local storage or contact us for guidance.</li>
          </ul>

          <h2>Children</h2>
          <p>The Extension is not designed for use by children under 13 (or higher age where required). We do not knowingly collect data from children.</p>

          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy to reflect changes in the Extension or legal requirements. We will post the updated policy and update the Effective date at the top. Significant changes will be communicated via the Extension listing or within the Extension as appropriate.</p>

          <h2>Contact</h2>
          <p>If you have questions, concerns, or requests related to this Privacy Policy or your data, contact:<br />
            Developer: Thread Attachments for Gmail™ developer<br />
            Email: <a href="mailto:roishmuel14@gmail.com">roishmuel14@gmail.com</a>
          </p>

          <h3>Summary (Key Points)</h3>
          <ul>
            <li>The Extension requests only <code>gmail.readonly</code>.</li>
            <li>It collects only email metadata and attachment identifiers needed to list and download attachments.</li>
            <li>All processing is local to your browser; no data is sent to external servers.</li>
            <li>No data is shared with third parties and no data is used for advertising or analytics.</li>
            <li>The Extension complies with Google’s API Services User Data Policy, including Limited Use requirements.</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
