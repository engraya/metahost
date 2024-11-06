import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  // description: '',
  items: [
    {
      q: 'What is Metahost?',
      a: (
        <>
    Metahost is an AI-powered platform designed for hosting decentralized and blockchain applications, providing seamless deployment, scalability, and optimization through advanced technologies
        </>
      ),
    },
    {
      q: 'How does AI improve my app’s performance?',
      a: "Our AI algorithms automatically analyze your app’s traffic, security, and performance, making real-time adjustments to optimize speed, reduce latency, and improve overall efficiency",
    },
    {
      q: 'Is Metahost secure for blockchain apps?',
      a: 'Yes, Metahost is designed with blockchain security principles, ensuring your apps are protected by decentralized infrastructure and advanced security protocols.',
    },
    {
      q: 'Can I scale my app with Metahost?',
      a: 'Absolutely! Metahost offers seamless scalability, allowing your DApp to grow without compromising performance or uptime',
    },
  ],
}

export default faq
