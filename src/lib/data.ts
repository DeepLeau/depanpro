// Navigation
export const NAV_ITEMS = [
  { label: 'How it works', href: '#how' },
  { label: 'Features', href: '#protocol' },
  { label: 'Security', href: '#security' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const

// Feature Primitives
export const FEATURES_ATTACH = {
  title: 'attach(1)',
  description: 'Join any active session by ID or hostname. Forge resolves the broker endpoint via DNS SRV or config file and establishes a TLS 1.3 channel. Your terminal emulator connects to the resulting PTY as if you were on the host.',
  command: '$ forge attach prod-eu/INC-4412',
  commandRo: '$ forge attach --ro prod-eu/INC-4412  # read-only mode',
} as const

export const FEATURES_HANDOFF = {
  title: 'handoff(1)',
  description: 'Pass write ownership to the next operator. The protocol ensures atomic lock transfer — no keystroke can be lost during the handoff window. A signed handoff record is appended to the session transcript.',
  command: '$ forge handoff marc',
  commandQueue: '$ forge handoff --queue low  # join the queue',
} as const

export const FEATURES_REPLAY = {
  title: 'replay(1)',
  description: 'Play back any recorded session. Scrub, pause, resume. Jump to the moment a specific operator took the keyboard. Export frames or pipe to a local PTY for step-through debugging.',
  command: '$ forge replay INC-4412',
  commandRo: '$ forge replay --seek 14:22 INC-4412',
} as const

// Replay Timeline
export const REPLAY_TIMELINE = [
  { time: '00:00', cursor: 'cursor-a', operator: 'noemi', command: 'kubectl -n payments get pods', status: '✓', statusColor: 'text-[var(--color-terminal-sage)]' },
  { time: '04:11', cursor: 'cursor-a', operator: 'noemi', command: 'kubectl logs payments-api-6c7d-9bxqp --previous', status: '!', statusColor: 'text-[#d97757]' },
  { time: '14:22', cursor: 'cursor-b', operator: 'marc', command: 'psql -h pg-primary.internal -c "select pg_is_in_recovery()"', status: '✓', statusColor: 'text-[var(--color-terminal-sage)]' },
  { time: '28:44', cursor: 'cursor-c', operator: 'liang', command: 'aws ec2 describe-security-groups --filters Name=tag:env,Values=prod', status: '✓', statusColor: 'text-[var(--color-terminal-sage)]' },
  { time: '41:05', cursor: 'cursor-b', operator: 'marc', command: 'kubectl rollout undo deployment/payments-api', status: '✓', statusColor: 'text-[var(--color-terminal-sage)]' },
  { time: '47:18', cursor: 'cursor-a', operator: 'noemi', command: 'kubectl -n payments get pods', status: '✓', statusColor: 'text-[var(--color-terminal-sage)]' },
] as const

// Security Features
export const SECURITY_FEATURES = [
  { icon: 'lock', label: 'e2e encrypted', title: 'ChaCha20-Poly1305, broker-blind', description: 'The broker decrypts only what it routes. Session keys never leave the client; the broker cannot read your commands.' },
  { icon: 'clock', label: 'append-only', title: 'WORM replay storage', description: 'Sessions are immutable once written. Retention locks satisfy SEC 17a-4, FINRA 4511, and HIPAA audit requirements.' },
  { icon: 'check', label: 'audit log', title: 'Every action attributed', description: 'Keystrokes, handoffs, detaches, and reconnects are signed with operator certificates and shipped to your SIEM.' },
  { icon: 'file', label: 'agent binary', title: '6MB, statically linked, unprivileged', description: 'No Ruby, no Python, no package manager. Runs as a read-only systemd unit with no sudo access required.' },
] as const

// Pricing Tiers
export const PRICING_TIERS = [
  {
    name: 'Solo',
    price: '$0',
    period: '/mo',
    description: 'For individuals evaluating Forge on a single host.',
    features: [
      '1 operator seat',
      '1 agent registration',
      '7-day replay retention',
      'Community support',
    ],
    recommended: false,
    cta: 'Start free',
    ctaVariant: 'secondary',
  },
  {
    name: 'Team',
    price: '$49',
    period: '/mo',
    description: 'For SRE teams running incidents together.',
    features: [
      'Up to 10 operator seats',
      'Unlimited agent registrations',
      '90-day replay retention',
      'SIEM integration (Splunk, Datadog)',
      'Priority email support',
    ],
    recommended: true,
    cta: 'Start 14-day trial',
    ctaVariant: 'primary',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For orgs with compliance and multi-cloud requirements.',
    features: [
      'Unlimited operator seats',
      'Unlimited agents',
      'Custom replay retention',
      'VPC peering / private link',
      'SLA 99.9% uptime',
      'Dedicated CSM + TAM',
    ],
    recommended: false,
    cta: 'Talk to sales',
    ctaVariant: 'secondary',
  },
] as const

// FAQ Items
export const FAQ_ITEMS = [
  {
    question: 'How does Forge differ from tmux or screen shared sessions?',
    answer: 'tmux and screen multiplex a local PTY. Forge multiplexes a remote PTY — the agent runs on the host, and operators connect through a broker. The shell process never knows multiple humans are attached. This means Forge works with any shell (bash, zsh, fish), any user (root, unprivileged), and any program (kubectl, psql, vim) without modification. tmux sharing requires all participants to be on the same network with shared history of the current session; Forge records everything and works over the internet.',
  },
  {
    question: 'Does Forge support read-only observation?',
    answer: 'Yes. Operators can attach with --ro flag and watch the session without being able to send input. They still see cursor positions and the full transcript in real time. Useful for on-call shadows, post-mortem dry runs, and training.',
  },
  {
    question: 'What happens to recordings if the broker goes down mid-session?',
    answer: 'The agent continues writing to local storage independently of the broker. When the broker reconnects, the agent replays the buffered segment and resumes live sync. Sessions are resumable even after full network partition.',
  },
  {
    question: 'Is the broker required to be hosted by Forge?',
    answer: 'No. The broker is open-source (AGPLv3) and ships as a single Docker image. You can run it in your own VPC, behind your VPN, or air-gapped. Cloud-hosted broker with SLA is available on Team and Enterprise plans.',
  },
  {
    question: 'How is session data encrypted at rest?',
    answer: 'Replay files are encrypted with ChaCha20-Poly1305 before leaving the agent. Each session key is derived from a master key stored in your KMS (AWS KMS, GCP CKMS, or HashiCorp Vault). The broker never sees plaintext. Keys are rotated per session.',
  },
  {
    question: 'Does Forge work with jump hosts or bastion SSH?',
    answer: 'Yes. The agent can be deployed on the target host via SSH proxy jump, or you can run it behind a bastion. Forge uses its own transport (QUIC/UDP by default, TCP fallback) which tunnels over the SSH connection if needed.',
  },
] as const

// Footer Links
export const FOOTER_LINKS = {
  product: [
    'Features',
    'Security',
    'Pricing',
    'Changelog',
    'Roadmap',
  ],
  developers: [
    'Documentation',
    'API Reference',
    'Self-host guide',
    'GitHub',
    'RFC-001',
  ],
  company: [
    'About',
    'Blog',
    'Careers',
    'Press kit',
    'Status',
  ],
  contact: [
    { label: 'hello@forge.sh', href: 'mailto:hello@forge.sh' },
    { label: 'GitHub Issues', href: 'https://github.com/forge-sh/forge/issues' },
    { label: '@forge_sh', href: 'https://twitter.com/forge_sh' },
  ],
} as const
