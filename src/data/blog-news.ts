import type { BlogPost } from "./blog";

/** Source-checked news analysis. Keep dated incident status in the article body. */
export const newsPosts: BlogPost[] = [
  {
    slug: "microsoft-365-outage-november-2026-business-lessons",
    title: "Microsoft 365 Outage in November 2026: What Businesses Should Check",
    excerpt:
      "Microsoft lists its November Outlook and Microsoft 365 incidents as restored. Here is what happened and how to check whether customer enquiries reached your team.",
    date: "2026-11-15",
    category: "Business",
    featured: false,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "6 min read",
    tags: ["Microsoft 365", "Business continuity", "Email", "Website forms"],
    relatedServiceSlugs: ["website-maintenance", "custom-development", "web-development"],
    relatedPostSlugs: ["automating-your-workflow-tools-tips", "technical-seo-audit-checklist"],
    relatedProjectSlugs: [],
    keywords: {
      primary: "Microsoft 365 outage November 2026",
      secondary: [
        "Outlook outage November 2026",
        "Exchange Online outage",
        "Microsoft 365 service status",
        "website contact form email failure",
        "business continuity for small business",
      ],
    },
    meta: {
      title: "Microsoft 365 Outage November 2026: What Businesses Should Check | Quesiono",
      description:
        "Microsoft lists the November 2026 Microsoft 365 and Outlook incidents as restored. Learn what happened and how to check email, forms and lead workflows.",
    },
    content: `
      <p><strong>A website can stay online while the path from its contact form to your team breaks.</strong> The Microsoft 365 disruption on 12 November 2026 is a useful reminder to check the whole enquiry journey, not just whether the homepage loads.</p>
      <p><strong>Status checked 15 November 2026:</strong> The Microsoft incident records for Exchange Online (EX1550543) and the wider Microsoft 365 suite (MO1550821) are marked <em>service restored</em> in a <a href="https://mailservices.isc.upenn.edu/computing/email/penno365/alerts/ms-incidents.html">university-hosted extract of Microsoft service-health updates</a>. This is a dated account, not a live status page. Check <a href="https://status.cloud.microsoft.com/">Microsoft's current status</a> and your tenant's Service health dashboard for a present-day issue.</p>

      <h2 id="what-happened">What happened during the Microsoft 365 outage?</h2>
      <p>Microsoft's Exchange Online incident described users unable to connect to mailboxes through methods including Outlook on the web, MAPI, Exchange ActiveSync and a REST API. Its related Microsoft 365 incident covered connectivity to multiple services. The impact varied by customer and service; these records do not say that every Microsoft product or every business website went down.</p>
      <p>The incident feed gives an impact window from 12 November into 13 November and records service restoration on 13 November at 16:10 UTC. Microsoft continued monitoring delayed mail processing and remaining customer scenarios during recovery. The feed's latest status is the most useful reference for the outage window; individual users may have experienced shorter or different disruption.</p>

      <h2 id="cause-and-recovery">What did Microsoft say caused it?</h2>
      <p>Microsoft's final status update called this a technical issue, not one related to a cyberattack or AI agents. Its <strong>preliminary</strong> explanation was that an earlier network capacity upgrade created an issue that surfaced after a later network change. Microsoft said it had addressed the underlying issue and was restoring service gradually. A fuller post-incident report was still promised in that update, so the preliminary explanation should not be treated as a complete engineering postmortem.</p>
      <p>Earlier updates described servers becoming unavailable, connection handling under pressure and recovery work involving traffic routing, server restarts and additional capacity. The important business lesson is that a provider can report gradual recovery while queued messages and connected workflows are still catching up.</p>

      <h2 id="could-a-website-lose-leads">Could a Microsoft outage affect website enquiries?</h2>
      <p>It depends on the form and its integrations. A website might accept an enquiry, then send a notification to an affected mailbox. If the original submission is stored securely elsewhere, the team can still review it when email is delayed. If the only copy is the email and delivery fails, there may be no independent record to inspect.</p>
      <p>That is a <strong>possible failure path</strong>, not evidence that this incident broke every website form. A success message should reflect what the system has actually accepted; a notification attempt is a separate event. If your form or CRM had trouble during the incident, examine the submission record, sending-provider logs and the destination mailbox before deciding what happened to a particular lead.</p>

      <h2 id="what-to-check-now">Five checks for a small business after an email outage</h2>
      <h3>1. Confirm which service was affected</h3>
      <p>Review your Microsoft 365 admin center's Service health page and the incident IDs. A public outage chart can be an early signal, but your tenant's service information is more useful when deciding which workflows to inspect.</p>
      <h3>2. Compare form records with mailbox messages</h3>
      <p>List enquiries, bookings and support requests submitted during the affected period. Compare the system's own records with notifications actually received. Where there is no independent record, test the form carefully and plan a more reliable way to retain future submissions.</p>
      <h3>3. Check queues before resending</h3>
      <p>Mail and integration services may retry delayed work. Review logs or provider status before manually replaying requests, or customers may receive duplicate confirmations and staff may create duplicate records.</p>
      <h3>4. Give customers one monitored fallback</h3>
      <p>If your usual inbox is unreliable, show a verified alternative contact route and assign someone to watch it. A phone number, another mailbox or a securely stored form can work. The fallback is useful only if a person knows to check it.</p>
      <h3>5. Write down who owns recovery</h3>
      <p>Record who checks provider incidents, where pending leads can be found, how customers are updated and who confirms that the backlog is clear. Keep this short enough to use during a real disruption.</p>

      <h2 id="design-for-recovery">Design the enquiry flow for recovery</h2>
      <p>A reliable workflow separates receiving the customer's request from notifying the team. For important forms, consider validated input, secure storage, a clear acceptance response, delivery monitoring and a visible retry or review path. Apply appropriate access controls, retention rules and privacy disclosures to stored personal information.</p>
      <p>For connected systems, use bounded retries and a way to prevent duplicate actions when a request is repeated. Monitor the final business outcome, not just whether the website returned a 200 response. These decisions belong in a <a href="/services/custom-development">custom integration</a> or <a href="/services/website-maintenance">website maintenance</a> scope when lead delivery is critical.</p>

      <h2 id="seo-and-availability">Did the outage affect Google rankings?</h2>
      <p>There is no basis to claim this Microsoft 365 incident directly changed Google rankings across the web. An Outlook or Exchange Online disruption is different from every website being unavailable. Search visibility, site availability and conversion delivery are related parts of a customer journey, but each needs its own evidence and fix. If search engines cannot reach your pages, investigate <a href="/services/seo/technical-seo">technical SEO</a>; if an enquiry stops between the form and the team, investigate the delivery workflow.</p>

      <h2 id="microsoft-outage-faq">Microsoft outage questions</h2>
      <h3>Was Outlook affected on 12 November 2026?</h3>
      <p>Yes. Microsoft's Exchange Online incident described mailbox connection problems through several methods, including Outlook on the web. Impact varied by customer.</p>
      <h3>Is the November incident still active?</h3>
      <p>The incident extract checked on 15 November marks EX1550543 and MO1550821 as service restored. For a current problem, use <a href="https://status.cloud.microsoft.com/">Microsoft's live status</a> or your organization's Service health dashboard.</p>
      <h3>Was a cyberattack the cause?</h3>
      <p>Microsoft's final incident update called it a technical issue unrelated to cyber or AI agents and gave a preliminary explanation involving network capacity changes. A full post-incident report was still pending in that update.</p>

      <h2 id="sources">Sources and reporting note</h2>
      <p>This article was checked on 15 November 2026 against the <a href="https://mailservices.isc.upenn.edu/computing/email/penno365/alerts/ms-incidents.html">Microsoft incident updates reproduced by the University of Pennsylvania</a> for EX1550543 and MO1550821. <a href="https://status.cloud.microsoft.com/">Microsoft's service status</a> may change after publication. The business scenarios above are guidance, not claims that a particular Quesiono client lost leads in this incident.</p>
      <p>If your website depends on email, bookings or a CRM, <a href="/contact?service=custom-development&amp;source=%2Fblog%2Fmicrosoft-365-outage-november-2026-business-lessons">tell us where an enquiry is meant to go</a>. We can help scope a check of that handoff and the recovery path.</p>
    `,
  },
  {
    slug: "nvidia-ceo-jensen-huang-resigns-affair-reports-2026",
    title: "Nvidia CEO Jensen Huang Resigns Amid Affair Reports: What Is Confirmed?",
    excerpt:
      "Nvidia confirmed Jensen Huang's resignation and named Colette Kress interim CEO. Its transition announcement did not state a reason. Here is what businesses can learn from the change.",
    date: "2026-11-15",
    category: "Business",
    featured: false,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "6 min read",
    tags: ["Nvidia", "Jensen Huang", "AI infrastructure", "Business continuity"],
    relatedServiceSlugs: ["custom-development", "website-maintenance", "web-development"],
    relatedPostSlugs: ["automating-your-workflow-tools-tips", "microsoft-365-outage-november-2026-business-lessons"],
    relatedProjectSlugs: [],
    keywords: {
      primary: "Nvidia CEO resigns",
      secondary: [
        "Jensen Huang resignation",
        "Colette Kress interim CEO",
        "Nvidia leadership change 2026",
        "AI vendor dependency",
        "business automation reliability",
      ],
    },
    meta: {
      title: "Nvidia CEO Jensen Huang Resigns: Confirmed Facts | Quesiono",
      description:
        "Nvidia confirmed Jensen Huang's resignation and appointed Colette Kress interim CEO in November 2026. What is verified, what remains unresolved, and why dependencies matter.",
    },
    content: `
      <p><strong>Nvidia announced a leadership change on 12 November 2026.</strong> Co-founder Jensen Huang resigned as president, chief executive and a board member. The board appointed chief financial officer Colette Kress as interim CEO while it searches for a permanent successor.</p>
      <p>The resignation is confirmed by <a href="https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-CEO-Transition/">Nvidia's announcement</a> and a <a href="https://www.sec.gov/Archives/edgar/data/1045810/000104581026000082/nvda-20261111.htm">U.S. securities filing</a>. The company's transition announcement did <strong>not</strong> state a reason. That distinction matters amid public discussion of Huang's admitted infidelity and a separate board investigation.</p>

      <h2 id="what-nvidia-confirmed">What did Nvidia confirm about the CEO transition?</h2>
      <p>The Form 8-K says Nvidia's board accepted Huang's resignation on 11 November, effective immediately. Nvidia announced it publicly the next day. Kress continues as executive vice president and CFO while serving as interim CEO, and the board said it would consider internal and external candidates for the permanent role. Harvey C. Jones became chair of the board.</p>
      <p>Nvidia said it expected operations, customer commitments and the product roadmap to continue. That is the company's stated expectation, not a guarantee about every future delivery or service. <a href="https://investor.nvidia.com/governance/management-team/default.aspx">Its management page</a> listed Kress as interim CEO when this article was checked on 15 November 2026.</p>

      <h2 id="affair-reports-and-investigation">What is known about the affair reports and investigation?</h2>
      <p>In a <a href="https://nvidianews.nvidia.com/news/a-message-to-our-company">message published by Nvidia on 8 November</a>, Huang acknowledged being unfaithful to his wife. Nvidia's board separately said it had opened an <a href="https://nvidianews.nvidia.com/news/statement-from-nvidia-board-of-directors">independent investigation</a> after reports that Huang had been the target of a foreign intelligence effort. The board said at that time that it had no reason to believe national security or Nvidia secrets had been compromised. Independent directors later said they had retained outside counsel for the review.</p>
      <p>These are distinct facts. Nvidia's CEO-transition release did not attribute the resignation to a particular allegation, and the board's investigation was not a finding of espionage or wrongdoing by any named third party. This article does not draw a causal conclusion the company has not made public.</p>

      <h2 id="who-leads-nvidia">Who is Nvidia's CEO now?</h2>
      <p>As of the 15 November source check, Colette Kress was interim CEO and continued as CFO. She joined Nvidia in 2013, according to the company's announcement. A permanent replacement had not been named in that announcement. Leadership information can change, so consult Nvidia's <a href="https://investor.nvidia.com/governance/management-team/default.aspx">current management page</a> for the latest position.</p>

      <h2 id="why-businesses-should-care">What does this mean for businesses using AI?</h2>
      <p>A leadership change at a supplier does not mean its chips, APIs or applications stop working. It does make a useful prompt to inspect dependencies that have become important to your operations. Many customer-facing tools rely on a chain of hosting, models, payment systems, email providers and integrations. A business may see one interface while several vendors sit behind it.</p>
      <p>The risk is broader than one company or one executive. If a supplier changes pricing, access, terms or technical direction, can your business still serve customers and use its own data? The right answer depends on what the workflow does and how difficult it would be to change providers.</p>

      <h2 id="five-questions">Five questions for an AI-dependent workflow</h2>
      <h3>1. Which services sit behind the experience?</h3>
      <p>Map the providers behind your most important customer actions: enquiry, booking, checkout, support and internal approval. Include the less visible systems that send notifications or move records.</p>
      <h3>2. What happens when an integration times out?</h3>
      <p>Test the failure path. Does the customer receive an accurate response? Is the request stored? Can staff see a retry queue or an alert? A workflow that fails silently is harder to recover than one that clearly pauses.</p>
      <h3>3. Can you access your own data and change providers?</h3>
      <p>Document configurations and keep business data exportable. Where practical, separate provider-specific code from the rest of the application. That can turn a future vendor change into a planned project rather than an emergency rewrite.</p>
      <h3>4. Is there a human fallback?</h3>
      <p>If an assistant cannot answer, visitors should still be able to contact a person. If automatic lead routing fails, someone should be able to review the saved requests. Automation should reduce work without making the business dependent on a single happy path.</p>
      <h3>5. Are you measuring the business result?</h3>
      <p>Track whether the system helps people complete a task, responds reliably and saves staff time. Counting subscriptions or model calls does not show whether the customer journey improved.</p>

      <h2 id="reliable-automation">Build automation for ordinary failures</h2>
      <p>APIs slow down, credentials expire and data formats change even without a high-profile news event. For critical workflows, define who owns the data, how retries work, when a person is alerted and what the customer sees. Test these decisions before an outage exposes them.</p>
      <p>Quesiono can scope the practical work through <a href="/services/custom-development">custom web applications and integrations</a>, <a href="/services/website-maintenance">website maintenance</a> or <a href="/services/web-development">web development</a>. The first step is identifying which customer request or team task must work reliably.</p>

      <h2 id="nvidia-faq">Nvidia leadership questions</h2>
      <h3>Did Jensen Huang resign as Nvidia CEO?</h3>
      <p>Yes. Nvidia announced the resignation on 12 November 2026, and its SEC filing says the board accepted it on 11 November.</p>
      <h3>Did Nvidia say an affair caused the resignation?</h3>
      <p>No. Huang acknowledged infidelity in his own published message. Nvidia's formal transition announcement did not state a reason for his departure.</p>
      <h3>Is Colette Kress the permanent CEO?</h3>
      <p>The 12 November announcement named her interim CEO while the board searched for a permanent successor. Check Nvidia's current management page for any later change.</p>

      <h2 id="sources">Sources and reporting note</h2>
      <p>Checked 15 November 2026: <a href="https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-CEO-Transition/">Nvidia CEO-transition announcement</a>; <a href="https://www.sec.gov/Archives/edgar/data/1045810/000104581026000082/nvda-20261111.htm">Form 8-K</a>; <a href="https://nvidianews.nvidia.com/news/a-message-to-our-company">Huang's published message</a>; <a href="https://nvidianews.nvidia.com/news/statement-from-nvidia-board-of-directors">Nvidia board statement</a>; and <a href="https://nvidianews.nvidia.com/news/statement-from-the-independent-members-of-the-nvidia-board">independent directors' statement</a>. The investigation may develop after this article's source check.</p>
      <p>If an AI or software dependency is making a customer workflow hard to trust, <a href="/contact?service=custom-development&amp;source=%2Fblog%2Fnvidia-ceo-jensen-huang-resigns-affair-reports-2026">tell us which step is breaking</a>. We can help define a practical, testable improvement.</p>
    `,
  },
];
