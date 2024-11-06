'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

export const meta: Metadata = {
  title: 'Metahost',
  description: 'Seamless, secure, and scalable hosting for blockchain and decentralized applications',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 20 }} pb="20">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Empowering Decentralized Apps
                <Br /> with AI-Powered Hosting
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Metahost is a <Em>seamless, secure, and scalable platform</Em>
                <Br /> for hosting blockchain and decentralized applications<Br />{' '}
                . Harness the power of AI to optimize your DApp performance. 
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Sign Up
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'AI-Optimized Infrastructure',
            icon: FiSmile,
            description: 'Harness AI to automatically optimize your DApp’s performance, ensuring low latency and high efficiency.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Decentralized & Secure',
            icon: FiSliders,
            description:
              'Built with blockchain security principles in mind, Metahost ensures that your apps are hosted on a secure, decentralized infrastructure.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Seamless Scaling',
            icon: FiGrid,
            description:
              'Easily scale your decentralized apps to handle growing traffic without worrying about downtime or performance dips.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Cross-Chain Compatibility',
            icon: FiThumbsUp,
            description:
              'Deploy your DApps across multiple blockchains and ensure compatibility with leading blockchain networks',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Launch Your DApp in Minutes">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
          Sign up today and experience the power of AI-optimized hosting for your decentralized applications.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Ready to Supercharge Your Blockchain App?">
        <Text color="muted" fontSize="lg">
        Get your project up and running with our seamless, AI-powered platform. Hosting made easy.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
  name="David Zhang"
  description="Blockchain App Developer"
  avatar="/static/images/david-avatar.jpg"
  gradient={['teal.200', 'blue.500']}
>
  “Metahost revolutionized our DApp hosting process. With its AI-powered optimizations, we saw a significant boost in performance, and it saved us countless hours of manual infrastructure management. Now, we focus entirely on improving our blockchain app, knowing that Metahost has the backend covered.”
</HighlightsTestimonialItem>

<HighlightsItem colSpan={[1, null, 2]} title="Host your next blockchain app with AI-powered efficiency">
  <Text color="muted" fontSize="lg">
    Metahost takes care of your decentralized app's hosting needs, allowing you to focus on building innovative blockchain solutions. Enjoy enhanced performance and seamless scalability with AI-driven infrastructure.
  </Text>
  <Wrap mt="8">
    {[
      'AI optimization',
      'security monitoring',
      'cross-chain compatibility',
      'real-time analytics',
      'smart scaling',
      'server-side rendering',
      'global deployment',
      'decentralized infrastructure',
      'REST & GraphQL APIs',
      '24/7 support',
      'multi-tenancy',
      'flexible pricing',
      'cloud hosting',
      'blockchain integration',
      'data privacy',
      'automatic updates',
      'DApp performance tracking',
    ].map((value) => (
      <Tag
        key={value}
        variant="subtle"
        colorScheme="blue"
        rounded="full"
        px="3"
      >
        {value}
      </Tag>
    ))}
  </Wrap>
</HighlightsItem>

    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Features
        </Heading>
      }
      description={
        <>

        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'AI-Powered Hosting',
          icon: FiBox,
          description:
            'Leverage AI to optimize performance, security, and resource management automatically.',
          variant: 'inline',
        },
        {
          title: 'Blockchain-Ready Infrastructure.',
          icon: FiLock,
          description:
            'Purpose-built for decentralized applications, ensuring high uptime and security for blockchain apps',
          variant: 'inline',
        },
        {
          title: 'One-Click Deployment.',
          icon: FiSearch,
          description:
            'Easily deploy and manage your DApps with our intuitive, one-click deployment feature.',
          variant: 'inline',
        },
        {
          title: 'Integrated Analytics & Monitoring.',
          icon: FiUserPlus,
          description:
            'Gain actionable insights into your DApp’s performance, user activity, and security with built-in analytics.',
          variant: 'inline',
        },
        {
          title: 'Global Network for Low Latency',
          icon: FiFlag,
          description:
            "With a global network of servers, Metahost ensures low latency and fast load times for your users worldwide.",
          variant: 'inline',
        },
        {
          title: 'Customizable Pricing Plans.',
          icon: FiTrendingUp,
          description:
            'Flexible pricing tailored to meet the needs of small-scale developers and enterprise-grade applications alike',
          variant: 'inline',
        },
        {
          title: 'Real-Time Analytics.',
          icon: FiToggleLeft,
          description:
            'Track your app’s performance with detailed, real-time insights into usage, security, and scalability metrics.',
          variant: 'inline',
        },
        {
          title: '24/7 Support & Community.',
          icon: FiTerminal,
          description:
            'Benefit from round-the-clock support and an active community to help you every step of the way.',
          variant: 'inline',
        },
        {
          title: 'Open source.',
          icon: FiCode,
          description: (
            <>
            Benefit from contributing to open source software.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
