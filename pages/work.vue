<script setup lang="ts">
const process = [
  { number: '01', title: 'Discovery', detail: 'Desk & secondary research' },
  { number: '02', title: 'Definition', detail: 'Problem framing' },
  { number: '03', title: 'Concept test', detail: 'Interviews & FGD' },
  { number: '04', title: 'Refinement', detail: 'Synthesis, iteration' },
  { number: '05', title: 'Usability test', detail: 'FGB, behavioural research' },
  { number: '06', title: 'Refine, launch', detail: 'Synthesis & pre-rollout revision' },
]

const changes = [
  ['Reorganized content by pregnancy stage and child age', 'A stage-based structure would feel more intuitive for mothers to navigate'],
  ['Simpler, more conversational writing', 'Replacing medical terms with everyday language would improve comprehension'],
  ['Cleaner layouts and modern illustrations', 'Visual updates would increase engagement, especially for younger mothers'],
  ['QR codes linking to videos and resources', "Digital add-ons would extend the book’s educational reach"],
]

const decisions = [
  ['☷', 'Listicle with 3 clear CTAs.', 'Each age group section was restructured around three simple questions: “What’s happening? What should I do? Why does it matter?”, reducing cognitive load and making action steps immediately clear.'],
  ['⊕', 'Even simpler language.', 'Medical terms were replaced not just with simpler words, but with familiar ones. “ASI eksklusif” became “Hanya ASI saja.” “Komplikasi” became “Masalah.” Small changes, significant comprehension impact.'],
  ['⊙', 'Reference guides added to growth charts.', 'Previously, growth charts were graphic-only and difficult to read for many mothers and cadres. Reference points were added to help them interpret what external help might be needed.'],
  ['▣', 'Health status summary on the front page.', 'A quick-reference health summary was added to the cover, designed specifically to help healthcare providers rapidly assess a mother’s history during emergency situations.'],
  ['⊙', 'Clearer visual cues.', 'Illustrations for do’s and don’ts were redesigned with explicit visual cues, removing ambiguity for lower-literacy users.'],
]
</script>

<template>
  <div class="site-shell font-sans case-study-page"><SiteHeader /><main>
    <section class="case-hero site-frame"><div><p class="eyebrow">Case study 01</p><h1>Revamping Buku KIA</h1><p class="case-subtitle">Buku KIA has been in the hands of millions of Indonesian mothers for decades. <strong>But how many actually read it?</strong></p></div><dl class="case-meta"><div><dt>Industry</dt><dd>Public Health / Maternal &amp; Child Healthcare</dd></div><div><dt>Date</dt><dd>March 2024</dd></div></dl></section>
    <section class="case-overview site-frame"><p class="case-label">Overview</p><div class="overview-content"><h2>Context &amp; Problem</h2><p>Buku KIA isn’t just a handbook, for many Indonesian mothers, especially outside major cities, it’s the only structured source of maternal and child health information they own. When the Ministry of Health and UNICEF decided to revise it, the question wasn’t just “how should it look?” It was “does this book actually work?”</p><blockquote>“How might we improve the structure, readability, and overall experience of Buku KIA to make healthcare information more approachable for mothers?”</blockquote><div class="role-grid"><div><dt>My role</dt><dd>Senior UX Researcher.<br>Responsible for end-to-end research planning, execution, and translating findings into a revamp suggestion.</dd></div><div><dt>Core team</dt><dd>1 Product Designer, 2 Copywriter, 2 Illustrators<br>2 UX Researcher, 2 Designers.</dd></div><div><dt>Clients</dt><dd>Kemenkes RI<br>UNICEF</dd></div></div></div></section>
    <section class="case-evidence site-frame"><div class="case-image case-image--kia"><img src="/images/work-buku-kia-hero.png" alt="Buku KIA maternal and child health book" width="1610" height="1066"></div><div class="metrics"><div><dt>Buku KIA ownership</dt><dd>80.8%</dd><small>of Indonesian mothers own the book</small></div><div><dt>Active usage rate</dt><dd>10.5%</dd><small>use it properly (pre-revamp)</small></div><div><dt>Cadre support impact</dt><dd>6X</dd><small>more likely to use Buku KIA actively</small></div></div></section>
    <section class="research-process site-frame"><p class="case-label">How we researched it</p><div class="process-row"><div v-for="step in process" :key="step.number" class="process-step"><span>{{ step.number }}</span><strong>{{ step.title }}</strong><small>{{ step.detail }}</small></div></div></section>
    <section class="change-table site-frame"><p class="case-label">What we set to improve</p><div class="table-head"><strong>Design change</strong><strong>Hypothesis</strong></div><div v-for="row in changes" :key="row[0]" class="table-row"><span>{{ row[0] }}</span><span>{{ row[1] }}</span></div></section>
    <section class="insights site-frame"><p class="case-label">Key insights</p><div class="insight-list"><article><b>01</b><div><h3>Education level shaped everything.</h3><p>Higher-educated mothers engaged independently. Lower-literacy mothers relied almost entirely on cadres and midwives, meaning the book needed to work alongside people, not instead of them.</p></div></article><article><b>02</b><div><h3>Owning the book didn’t mean using it.</h3><p>Many mothers kept Buku KIA for a passive record rather than an active parenting reference, which meant comprehension barriers weren’t just design, they were about how mothers understood the book’s benefit in their lives.</p></div></article><article><b>03</b><div><h3>QR codes worked, but not universally.</h3><p>In remote regions, many mothers had no smartphone or internet access. A feature designed to enrich the experience was inaccessible for the communities who needed support most.</p></div></article></div><div class="case-image case-image--mother"><img src="/images/work-buku-kia-key-insight.png" alt="Research participant reviewing Buku KIA content" width="1716" height="736"></div></section>
    <section class="decisions"><div class="site-frame"><p class="case-label">Decision we made</p></div><div class="decision-track"><article v-for="decision in decisions" :key="decision[1]"><span class="decision-icon">{{ decision[0] }}</span><span class="decision-type">Image</span><h3>{{ decision[1] }}</h3><p>{{ decision[2] }}</p></article></div></section>
    <section class="outcome site-frame"><p class="case-label">Outcome</p><p>The research validated the updated Buku KIA direction before national rollout, while surfacing paths the desk research couldn’t have — particularly around digital accessibility and the role of education level in health information engagement.<br><br>More importantly, it shifted the team’s framing: the challenge was never just modernizing a book. It was designing a healthcare communication tool that could serve Indonesia’s full diversity — across literacy levels, infrastructure realities, and degrees of health awareness.</p></section>
    <section class="reflection site-frame"><p class="case-label">Reflection</p><blockquote>I came into this project expecting the core problem to be visual, that the field taught me was that design clarity is only one layer, underneath it sits confidence, literacy, infrastructure, and how much a person believes healthcare information is meant for them.<br><br>Designing for Indonesia’s diversity means resisting the assumption that what works in Depok will work in Ende. That’s not a constraint, it’s the whole point of the research.</blockquote><div class="button-row"><a class="button button--solid" href="#">Download PDF case study <span>↓</span></a><a class="button button--outline" href="#">Next project <span>↗</span></a></div></section>
  </main><SiteFooter /></div>
</template>
