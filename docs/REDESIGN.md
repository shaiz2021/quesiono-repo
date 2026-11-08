# Quesiono redesign audit and implementation plan

## Baseline (8 November 2026)
Next.js 14 App Router, React 18, TypeScript, Tailwind, Framer Motion, react-hook-form, Resend, Vercel Analytics. Preserve this stack and every existing route. Existing package-lock.json modification predates this task.

Exact existing palette: ink #0B0F1C; midnight #1A2038; indigo #2B3459; slate-blue #3D4A85; champagne #C9A961; vanilla #F2EADA; sand #E3D6BE; cream #FBF8F3; white #FFFFFF; text-dark #14182B; text-muted #5B6472. Fonts: Bricolage Grotesque and Inter.

Inventory: 22 services, 8 portfolio routes, 6 industry routes, 14 articles, 3 role routes, core pages and 4 legal/accessibility pages. Existing dynamic route generators and sitemaps provide route authority.

## Findings
- All four supplied portfolio screenshots mismatch the client name, industry and outcome in their existing records. Actual image labels: Dream Floor, LSI-Decors, Arizto, Gerard. Remaining four projects have no supplied screenshots.
- No evidence files establish client results, ten testimonial permissions, team biographies, historical metrics, or hiring status. Preserve originals as an owner-review archive; never convert unverified claims into verified ones.
- Site phone is a 555 number. Office, registration, founding date, response guarantees and biographies need owner confirmation. Do not emit those as structured facts.
- Price and timing contradictions: service overview FAQ, pricing bands, service tiers, studio FAQ, process and articles disagree. Maintenance $199 versus $249; landing page $117 versus $249; general build timeline one week versus six–ten weeks. Preserve original prices for review; one commercial source must drive public scope guidance.
- Decorative showreel fabricates performance scores and charts. Before/after visual is generated, not actual project evidence. Too many meshes, reveals, marquees and repetitive sales sections.
- Contact API already uses Resend and honest delivery failures, but lacks website URL, contextual service preselection, source/UTM attribution, bounded body handling, origin checks and consent. Client bundles full services data. Required-field count is incorrect.
- FAQ IDs collide when multiple groups render. Navigation needs focus management, focus return, active states and robust mobile handling.
- Structured prices strip all punctuation (ranges become invalid enormous numbers); LocalBusiness/review/job facts are unverified. Articles repeat unsubstantiated project anecdotes.

## Implementation sequence
1. Archive original business/content records; add explicit evidence and commercial publication controls.
2. Refine existing tokens, spacing, typography, buttons, navigation, accessible disclosures and page shells; remove decorative animation from core journeys.
3. Build homepage: clear offer, problem pathways, four service categories, image-supported project gallery, practical working commitments, three stages, buyer FAQs, contextual enquiry.
4. Rewrite unique service positioning and scope; preserve individual deliverables, related services and route identity. Use shared approved pricing source.
5. Correct portfolio image attribution, preserve legacy URLs, gate unsupported case claims; improve industry-specific content and relationships.
6. Implement accessible contact funnel, optional details, attribution, privacy-aware events, safe Resend handling and failure recovery.
7. Revise supporting pages, article presentation, hiring status, legal descriptions and metadata to match actual implementation.
8. Build/typecheck/lint; test all routes and internal links, representative browser layouts, keyboard flows, API failure/validation/success with mocked provider, SEO/schema and analytics consent behavior.

## Publication
Local implementation only in the supplied existing repository. No new hosted project or live deployment is requested. Owner verification list and measured QA results will accompany delivery.
