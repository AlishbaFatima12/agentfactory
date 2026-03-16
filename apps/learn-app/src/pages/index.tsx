import { type ReactNode, lazy, Suspense } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Head from "@docusaurus/Head";

// Lazy load heavy IDE component - only loads when scrolled into view
const IDEShowcaseSection = lazy(() =>
  import("@/components/HeroIDESimulation").then((m) => ({
    default: m.IDEShowcaseSection,
  })),
);

import styles from "./index.module.css";

import { ThreeDBook } from "@/components/ThreeDBook";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { authors } from "@/data/authors";
import {
  Code,
  ArrowRight,
  Layers,
  GitBranch,
  Bot,
  Server,
  GraduationCap,
} from "lucide-react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const bookCoverUrl = useBaseUrl("/img/book-cover-page.webp");
  const primaryAvatarUrl = useBaseUrl(authors[0].avatar);
  return (
    <header
      className={clsx(
        styles.heroBanner,
        "relative overflow-hidden border-b border-border/40",
      )}
    >
      <div className="max-w-[1800px] mx-auto relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] min-h-[85vh]">
          {/* LEFT COLUMN: Technical Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 lg:py-0 border-r border-border/40">
            {/* Semantic Badge */}
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground/80 px-2 py-1 border border-border bg-muted/20">
                <Translate id="homepage.badge.aiFirst">AI-First Future</Translate>
              </span>
              <span className="w-12 h-[1px] bg-border"></span>
              <span className="font-mono text-xs text-muted-foreground/60 tracking-wider">
                <Translate id="homepage.badge.buildMonetize">BUILD & MONETIZE DIGITAL FTEs</Translate>
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground leading-[1.0] uppercase">
                <Translate id="homepage.title">THE AI AGENT</Translate> <br />
                <span className="text-primary block text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mt-1">
                  <Translate id="homepage.title.factory">FACTORY</Translate>
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-normal leading-[1.6] max-w-xl">
                <Translate id="homepage.subtitle.start">The</Translate>{" "}
                <span className="text-foreground font-medium">
                  <Translate id="homepage.subtitle.specDriven">Spec-Driven Blueprint</Translate>
                </span>{" "}
                <Translate id="homepage.subtitle.for">for Building and Monetizing Digital FTEs—</Translate>
                <span className="text-foreground font-medium">
                  <Translate id="homepage.subtitle.reliable">Reliable AI Agents</Translate>
                </span>{" "}
                <Translate id="homepage.subtitle.you">You Can Trust, Deploy, and Scale.</Translate>
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/70 font-normal leading-[1.5] max-w-xl -mt-1 sm:-mt-2">
                <Translate id="homepage.description">
                  A practical framework for engineers, domain professionals (accountants, finance managers, marketing professions, etc. ), enterprise leaders, startup founders, product architects, and operational teams building the next generation of AI-powered organizations.
                </Translate>
              </p>
            </div>

            {/* CTA Area */}
            <div className="flex flex-col items-start gap-4 sm:gap-6 mb-12 sm:mb-16">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="h-11 sm:h-14 px-5 sm:px-8 text-sm sm:text-lg font-bold rounded-none bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
                >
                  <Link
                    to="/docs/about"
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    <Translate id="homepage.button.startReading">START READING</Translate>{" "}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-11 sm:h-14 px-5 sm:px-8 text-sm sm:text-lg font-bold rounded-none transition-all"
                >
                  <Link to="https://panaversity.org/">
                    <Translate id="homepage.button.explorePanaversity">Explore Panaversity</Translate>
                  </Link>
                </Button>
              </div>
              {/* Social Proof - Premium Live Indicator */}
              <div className="flex items-center gap-2.5 mt-4">
                {/* Pulsing green dot */}
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                    style={{ animationDuration: "2s" }}
                  ></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {/* Stat */}
                <span className="text-lg font-bold text-foreground tracking-tight">
                  17,035
                </span>
                <span className="text-sm text-muted-foreground">
                  <Translate id="homepage.learners">professionals learning</Translate>
                </span>
                <span className="w-[1px] h-4 bg-border mx-1"></span>
                <Link
                  to="/reviews"
                  className="text-sm font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5"
                >
                  <Translate id="homepage.liveReviews">Live AI Reviews</Translate>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              {/* Authors */}
              {/* Co-Authors - Premium Chip Design */}
              <div className="flex flex-col gap-3 mt-4">
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground/60 uppercase pl-1">
                  <Translate id="homepage.coAuthoredBy">Co-Authored by</Translate>
                </span>

                <div className="flex flex-wrap items-center gap-3 allow-rounded">
                  {/* Lead Author */}
                  <a
                    href={authors[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 pr-3 pl-1 py-1 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-300 group animate-scale-in"
                  >
                    <Avatar className="h-8 w-8 border border-primary/30">
                      <AvatarImage
                        src={primaryAvatarUrl}
                        alt={authors[0].name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-primary/10 text-[10px] text-primary font-bold">
                        {authors[0].initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                      {authors[0].name}
                    </span>
                  </a>

                  {/* Co-Authors */}
                  {authors
                    .filter((a) => !a.isAI && a.name !== authors[0].name)
                    .map((author, index) => (
                      <a
                        key={author.name}
                        href={author.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 pr-3 pl-1 py-1 rounded-full border border-border bg-background/50 hover:bg-muted/80 hover:border-border/80 transition-all duration-300 group animate-scale-in opacity-0 fill-mode-forwards delay-${(index + 1) * 100}`}
                        style={{ animationDelay: `${(index + 1) * 100}ms` }}
                      >
                        <Avatar className="h-8 w-8 border border-border/50 bg-muted/50">
                          <AvatarImage
                            src={
                              siteConfig.baseUrl +
                              author.avatar.replace(/^\//, "")
                            }
                            alt={author.name}
                            className="object-cover"
                          />
                          <AvatarFallback className="text-[10px] font-medium text-muted-foreground">
                            {author.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                          {author.name}
                        </span>
                      </a>
                    ))}

                  {/* See All Link */}
                  <Link
                    to="/authors"
                    className="flex items-center gap-1 ml-1 px-2 py-1 text-[10px] font-medium text-muted-foreground hover:text-primary transition-colors animate-scale-in opacity-0"
                    style={{ animationDelay: "500ms" }}
                  >
                    <Translate id="homepage.aiAgents">& AI Agents</Translate>
                    <ArrowRight className="w-3 h-3 ml-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Artifact (Book) */}
          <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
            {/* Technical Grid Background */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>

            {/* Spotlight Effect */}
            <div className={styles.heroSpotlight} />

            <div className="relative z-10 transform transition-transform duration-700 hover:scale-[1.28] scale-[1.25]">
              <ThreeDBook
                src={bookCoverUrl}
                alt="The AI Agent Factory Book Cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import { Card, CardContent } from "@/components/ui/card";

function Feature({
  title,
  description,
  icon: Icon,
}: {
  title: ReactNode;
  description: ReactNode;
  icon: React.ElementType;
}) {
  return (
    <div className="group border border-border bg-card hover:bg-muted/30 transition-colors p-6 flex flex-col items-start gap-4">
      <div className="p-3 bg-primary/10 rounded-none border border-primary/20 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary stroke-[1.5]" />
      </div>
      <div>
        <h3 className="text-base font-bold text-foreground mb-2 uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

function AISpectrumSection() {
  return (
    <section className="py-24 border-b border-border/40 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            <Translate id="homepage.spectrum.title">Understanding AI Development</Translate>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <Translate id="homepage.spectrum.heading">The AI Development Spectrum</Translate>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <Translate id="homepage.spectrum.description">
              Three distinct approaches to AI in software development. This book
              teaches you both AI-Driven and AI-Native development.
            </Translate>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* AI Assisted */}
          <Card className="flex flex-col border bg-card hover:border-border transition-all duration-300">
            <CardContent className="flex flex-col h-full p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  <Translate id="homepage.spectrum.aiAssisted">AI Assisted</Translate>
                </h3>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  <Translate id="homepage.spectrum.aiAssistedRole">AI as Helper</Translate>
                </p>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                <Translate id="homepage.spectrum.aiAssistedDesc">
                  AI improves your productivity with code completion, debugging
                  assistance, and documentation generation.
                </Translate>
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span><Translate id="homepage.spectrum.bullet1">Code completion & suggestions</Translate>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span><Translate id="homepage.spectrum.bullet2">Bug detection & debugging</Translate>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span><Translate id="homepage.spectrum.bullet3">Documentation generation</Translate>
                </li>
              </ul>
              <div className="mt-auto pt-4 border-t text-xs text-muted-foreground">
                <strong className="text-foreground"><Translate id="homepage.spectrum.example1Label">Example:</Translate></strong> <Translate id="homepage.spectrum.example1">Using Copilot to build a React website faster</Translate>
              </div>
            </CardContent>
          </Card>

          {/* AI Driven */}
          <Card className="flex flex-col border-2 border-primary bg-card relative transition-all duration-300 hover:shadow-lg">
            <CardContent className="flex flex-col h-full p-6">
              <Badge
                variant="outline"
                className="absolute top-4 right-4 border-primary text-primary"
              >
                Covered
              </Badge>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  <Translate id="homepage.spectrum.aiDriven">AI Driven</Translate>
                </h3>
                <p className="text-sm font-medium text-primary uppercase tracking-wide">
                  <Translate id="homepage.spectrum.aiDrivenRole">AI as Co-Creator</Translate>
                </p>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                <Translate id="homepage.spectrum.aiDrivenDesc">
                  AI generates significant code from specifications. You act as
                  architect, director, and reviewer.
                </Translate>
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span><Translate id="homepage.spectrum.bullet4">Code generation from specs</Translate>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span><Translate id="homepage.spectrum.bullet5">Automated testing & optimization</Translate>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span><Translate id="homepage.spectrum.bullet6">Architecture from requirements</Translate>
                </li>
              </ul>
              <div className="mt-auto pt-4 border-t text-xs text-muted-foreground">
                <strong className="text-foreground"><Translate id="homepage.spectrum.example1Label">Example:</Translate></strong> <Translate id="homepage.spectrum.example2">Writing a spec for a REST API, AI generates complete FastAPI backend</Translate>
              </div>
            </CardContent>
          </Card>

          {/* AI Native */}
          <Card className="flex flex-col border-2 border-primary bg-card relative transition-all duration-300 hover:shadow-lg">
            <CardContent className="flex flex-col h-full p-6">
              <Badge className="absolute top-4 right-4">Ultimate Goal</Badge>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  <Translate id="homepage.spectrum.aiNative">AI Native</Translate>
                </h3>
                <p className="text-sm font-medium text-primary uppercase tracking-wide">
                  <Translate id="homepage.spectrum.aiNativeRole">AI IS the Software</Translate>
                </p>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                <Translate id="homepage.spectrum.aiNativeDesc">
                  Applications architected around AI capabilities. LLMs and agents
                  are core functional components.
                </Translate>
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span><Translate id="homepage.spectrum.bullet7">Natural language interfaces</Translate>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span><Translate id="homepage.spectrum.bullet8">Intelligent automation & reasoning</Translate>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span><Translate id="homepage.spectrum.bullet9">Agent orchestration systems</Translate>
                </li>
              </ul>
              <div className="mt-auto pt-4 border-t text-xs text-muted-foreground">
                <strong className="text-foreground"><Translate id="homepage.spectrum.example1Label">Example:</Translate></strong> <Translate id="homepage.spectrum.example3">Building a customer support agent that autonomously resolves tickets</Translate>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Simplified Flow Track */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
            <span className="text-sm text-muted-foreground"><Translate id="homepage.flow.helper">Helper</Translate></span>
          </div>
          <div className="w-12 h-px bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-sm font-medium text-foreground">
              <Translate id="homepage.flow.coCreator">Co-Creator</Translate>
            </span>
          </div>
          <div className="w-12 h-px bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-sm font-medium text-foreground">
              <Translate id="homepage.flow.coreSystem">Core System</Translate>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-24 border-b border-border/40 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header - Technical Style */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-border/40 pb-8 mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-primary"></div>
              <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest">
                <Translate id="homepage.features.badge">Core Pillars</Translate>
              </span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-foreground uppercase">
              <Translate id="homepage.features.heading">What Makes This Book Different</Translate>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-lg text-sm font-mono text-right md:text-right hidden md:block">
            // <Translate id="homepage.features.comment">A comprehensive, production-focused approach to co-learn with AI in spec-driven way</Translate>
          </p>
        </div>

        {/* Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 border border-border/40">
          <Feature
            icon={Bot}
            title={<Translate id="homepage.feature.coLearning">Co-Learning Philosophy</Translate>}
            description={<Translate id="homepage.feature.coLearningDesc">Learn alongside AI agents. Not just using AI as a tool, but co-creating where both human and AI learn together.</Translate>}
          />
          <Feature
            icon={Code}
            title={<Translate id="homepage.feature.dualLanguage">Dual Language Mastery</Translate>}
            description={<Translate id="homepage.feature.dualLanguageDesc">Python for reasoning & intelligence, TypeScript for interaction & UI. Master the bilingual AI-native stack.</Translate>}
          />
          <Feature
            icon={GitBranch}
            title={<Translate id="homepage.feature.specDriven">Spec-Driven Development</Translate>}
            description={<Translate id="homepage.feature.specDrivenDesc">Write specifications that both humans and AI understand. Specs become executable blueprints for intelligent systems.</Translate>}
          />
          <Feature
            icon={Layers}
            title={<Translate id="homepage.feature.agentic">Agentic AI Systems</Translate>}
            description={<Translate id="homepage.feature.agenticDesc">Build with OpenAI Agents SDK and Google ADK. Create agents that reason, act, and collaborate autonomously.</Translate>}
          />
          <Feature
            icon={Server}
            title={<Translate id="homepage.feature.architecture">Production-Ready Architecture</Translate>}
            description={<Translate id="homepage.feature.architectureDesc">Cloud-native deployment with Docker, Kubernetes, Dapr, and Ray. Scalable, secure, fault-tolerant systems.</Translate>}
          />
          <Feature
            icon={GraduationCap}
            title={<Translate id="homepage.feature.journey">Complete Learning Journey</Translate>}
            description={<Translate id="homepage.feature.journeyDesc">46 comprehensive chapters from programming basics to deploying enterprise agentic AI systems in production.</Translate>}
          />
        </div>
      </div>
    </section>
  );
}

function MaturityLevelsSection() {
  const levels = [
    {
      number: 1,
      title: <Translate id="homepage.maturity.level1">AI Awareness</Translate>,
      subtitle: <Translate id="homepage.maturity.level1.subtitle">Experimenting</Translate>,
      impact: <Translate id="homepage.maturity.level1.impact">10-20% productivity gains</Translate>,
      description: <Translate id="homepage.maturity.level1.description">Individual developers experimenting with AI coding tools. Early AI Assisted Development.</Translate>,
      approach: <Translate id="homepage.maturity.level1.approach">AI Assisted (Individual)</Translate>,
    },
    {
      number: 2,
      title: <Translate id="homepage.maturity.level2">AI Adoption</Translate>,
      subtitle: <Translate id="homepage.maturity.level2.subtitle">Standardizing</Translate>,
      impact: <Translate id="homepage.maturity.level2.impact">30-40% productivity boost</Translate>,
      description: <Translate id="homepage.maturity.level2.description">Organization-wide adoption with governance. Established guidelines and security policies.</Translate>,
      approach: <Translate id="homepage.maturity.level2.approach">AI Assisted (Team)</Translate>,
    },
    {
      number: 3,
      title: <Translate id="homepage.maturity.level3">AI Integration</Translate>,
      subtitle: <Translate id="homepage.maturity.level3.subtitle">Transforming Workflows</Translate>,
      impact: <Translate id="homepage.maturity.level3.impact">2-3x faster development</Translate>,
      description: <Translate id="homepage.maturity.level3.description">AI-Driven Development practices. Specs become living documentation. Workflows redesigned around AI collaboration.</Translate>,
      approach: <Translate id="homepage.maturity.level3.approach">AI Driven (Workflow)</Translate>,
    },
    {
      number: 4,
      title: <Translate id="homepage.maturity.level4">AI-Native Products</Translate>,
      subtitle: <Translate id="homepage.maturity.level4.subtitle">Building Intelligence</Translate>,
      impact: <Translate id="homepage.maturity.level4.impact">New capabilities unlocked</Translate>,
      description: <Translate id="homepage.maturity.level4.description">Products where AI/LLMs are core components. Agent orchestration, natural language interfaces, intelligent systems.</Translate>,
      approach: <Translate id="homepage.maturity.level4.approach">AI Native (Product)</Translate>,
      focus: true,
    },
    {
      number: 5,
      title: <Translate id="homepage.maturity.level5">AI-First Enterprise</Translate>,
      subtitle: <Translate id="homepage.maturity.level5.subtitle">Living in the Future</Translate>,
      impact: <Translate id="homepage.maturity.level5.impact">10x productivity</Translate>,
      description: <Translate id="homepage.maturity.level5.description">Entire organization AI-native. Custom models, self-improving systems, AI embedded in every aspect.</Translate>,
      approach: <Translate id="homepage.maturity.level5.approach">AI Native (Enterprise)</Translate>,
    },
  ];

  return (
    <section className="py-24 border-b border-border/40 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            <Translate id="homepage.maturity.badge">Your AI Journey</Translate>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <Translate id="homepage.maturity.heading">Organizational AI Maturity Levels</Translate>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <Translate id="homepage.maturity.description">
              Where does your organization stand? Understanding these levels helps
              you chart your path forward.
            </Translate>
          </p>
        </div>

        {/* Levels List with vertical connector */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical connector line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {levels.map((level) => (
              <div
                key={level.number}
                className={`relative pl-12 md:pl-16 ${level.focus ? "py-6 bg-card border-l-2 border-primary -ml-px" : ""}`}
              >
                {/* Number circle */}
                <div
                  className={`absolute left-0 md:left-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${level.focus ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  {level.number}
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {level.title}
                      </h3>
                      {level.focus && <Badge>Focus</Badge>}
                    </div>
                    <p className="text-sm text-primary font-medium mb-2">
                      {level.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      {level.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong className="text-foreground">Approach:</strong>{" "}
                      {level.approach}
                    </p>
                  </div>
                  <div className="text-sm font-medium text-primary whitespace-nowrap">
                    {level.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <strong className="text-foreground">
              <Translate id="homepage.maturity.cta">This book prepares you for Levels 3-4:</Translate>
            </strong>{" "}
            <Translate id="homepage.maturity.ctaDescription">Master AI-Driven workflows and build AI-Native products</Translate>
          </p>
        </div>
      </div>
    </section>
  );
}

function ParadigmShift() {
  const traditionalItems = [
    {
      title: <Translate id="homepage.paradigm.item1.traditional">Instruction-Based</Translate>,
      desc: <Translate id="homepage.paradigm.item1.desc">Tell computers exactly what to do with precise syntax</Translate>,
    },
    {
      title: <Translate id="homepage.paradigm.item2.traditional">Solo Coding</Translate>,
      desc: <Translate id="homepage.paradigm.item2.desc">Developer writes every line manually</Translate>,
    },
    {
      title: <Translate id="homepage.paradigm.item3.traditional">Documentation as Afterthought</Translate>,
      desc: <Translate id="homepage.paradigm.item3.desc">Specs are static contracts written post-facto</Translate>,
    },
    {
      title: <Translate id="homepage.paradigm.item4.traditional">Linear Learning</Translate>,
      desc: <Translate id="homepage.paradigm.item4.desc">Learn syntax → Build simple projects → Slowly scale</Translate>,
    },
    {
      title: <Translate id="homepage.paradigm.item5.traditional">Code-First</Translate>,
      desc: <Translate id="homepage.paradigm.item5.desc">Focus on implementation details from day one</Translate>,
    },
  ];

  const aiNativeItems = [
    {
      title: <Translate id="homepage.paradigm.item1.aiNative">Intent-Based</Translate>,
      desc: <Translate id="homepage.paradigm.item1.aiNativeDesc">Describe what you want; AI reasons how to build it</Translate>,
    },
    {
      title: <Translate id="homepage.paradigm.item2.aiNative">Co-Learning Partnership</Translate>,
      desc: <Translate id="homepage.paradigm.item2.aiNativeDesc">You and AI teach each other through iteration</Translate>,
    },
    {
      title: <Translate id="homepage.paradigm.item3.aiNative">Specs as Living Blueprints</Translate>,
      desc: <Translate id="homepage.paradigm.item3.aiNativeDesc">Specifications drive code, tests, and documentation</Translate>,
    },
    {
      title: <Translate id="homepage.paradigm.item4.aiNative">Production-First Learning</Translate>,
      desc: <Translate id="homepage.paradigm.item4.aiNativeDesc">Build real agentic systems from day one</Translate>,
    },
    {
      title: <Translate id="homepage.paradigm.item5.aiNative">Architecture-First</Translate>,
      desc: <Translate id="homepage.paradigm.item5.aiNativeDesc">Design intelligent collaborations, not just code</Translate>,
    },
  ];

  return (
    <section className="py-24 border-b border-border/40 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            <Translate id="homepage.paradigm.badge">The Great Shift</Translate>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <Translate id="homepage.paradigm.title">From Automation to Intelligence</Translate>
            <br />
            <span className="text-primary"><Translate id="homepage.paradigm.subtitle">From Coding to Co-Creating</Translate></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <Translate id="homepage.paradigm.description">
              AI-native development is not about replacing developers—it's about
              amplifying intelligence. Learn to collaborate with reasoning
              entities that learn with you.
            </Translate>
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-stretch mb-16">
          {/* Traditional Card */}
          <Card className="border bg-card">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground">
                  <Translate id="homepage.paradigm.traditional.heading">Traditional Development</Translate>
                </h3>
                <p className="text-muted-foreground uppercase text-xs font-medium tracking-wider mt-1">
                  <Translate id="homepage.paradigm.traditional.subtitle">The automation era</Translate>
                </p>
              </div>
              <ul className="space-y-4">
                {traditionalItems.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    <strong className="block text-foreground mb-1">
                      {item.title}
                    </strong>
                    {item.desc}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* VS Divider */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-16 bg-border" />
              <span className="text-sm font-bold text-muted-foreground">
                VS
              </span>
              <div className="w-px h-16 bg-border" />
            </div>
          </div>

          {/* AI-Native Card */}
          <Card className="border-2 border-primary bg-card relative">
            <CardContent className="p-8">
              <Badge className="absolute top-4 right-4">The Future</Badge>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground">
                  <Translate id="homepage.paradigm.aiNative.heading">AI-Native Way</Translate>
                </h3>
                <p className="text-primary uppercase text-xs font-medium tracking-wider mt-1">
                  <Translate id="homepage.paradigm.aiNative.subtitle">The intelligence era</Translate>
                </p>
              </div>
              <ul className="space-y-4">
                {aiNativeItems.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    <strong className="block text-primary mb-1">
                      {item.title}
                    </strong>
                    {item.desc}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function DigitalFTEComparison() {
  const comparisonData = [
    {
      feature: <Translate id="homepage.fte.feature">Availability</Translate>,
      human: "40 hours/week",
      digital: <Translate id="homepage.fte.item1.digital">168 hours/week (24/7)</Translate>,
      highlight: true,
    },
    {
      feature: <Translate id="homepage.fte.feature2">Monthly Cost</Translate>,
      human: "$4,000 – $8,000+",
      digital: <Translate id="homepage.fte.item2.digital">$500 – $2,000</Translate>,
      highlight: true,
    },
    {
      feature: <Translate id="homepage.fte.feature3">Ramp-up Time</Translate>,
      human: "3 – 6 months",
      digital: <Translate id="homepage.fte.item3.digital">Instant deployment</Translate>,
      highlight: false,
    },
    {
      feature: <Translate id="homepage.fte.feature4">Consistency</Translate>,
      human: "Variable (85–95%)",
      digital: <Translate id="homepage.fte.item4.digital">Predictable (99%+)</Translate>,
      highlight: false,
    },
    {
      feature: <Translate id="homepage.fte.feature5">Scaling</Translate>,
      human: "Linear (hire 10 for 10x)",
      digital: <Translate id="homepage.fte.item5.digital">Exponential (instant clone)</Translate>,
      highlight: true,
    },
    {
      feature: <Translate id="homepage.fte.feature6">Cost per Task</Translate>,
      human: "$30 – $60",
      digital: <Translate id="homepage.fte.item6.digital">$3 – $6</Translate>,
      highlight: true,
    },
  ];

  return (
    <section className="py-24 border-b border-border/40 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            <Translate id="homepage.fte.badge">The ROI of Autonomy</Translate>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <Translate id="homepage.fte.heading">Human FTE vs Digital FTE</Translate>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <Translate id="homepage.fte.description">A Digital FTE works 168 hours a week with zero fatigue. That's</Translate> {" "}
            <span className="text-foreground font-semibold"><Translate id="homepage.fte.output">4x the output</Translate></span>{" "}
            <Translate id="homepage.fte.cost">at a fraction of the cost.</Translate>
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-px bg-border/40 border border-border/40 overflow-hidden">
            {/* Header Row */}
            <div className="bg-muted/50 p-4 font-bold text-foreground text-sm uppercase tracking-wide">
              <Translate id="homepage.fte.feature">Feature</Translate>
            </div>
            <div className="bg-muted/50 p-4 font-bold text-foreground text-sm uppercase tracking-wide text-center">
              <Translate id="homepage.fte.human">Human FTE</Translate>
            </div>
            <div className="bg-primary/10 p-4 font-bold text-primary text-sm uppercase tracking-wide text-center border-l-2 border-primary">
              <Translate id="homepage.fte.digital">Digital FTE</Translate>
            </div>

            {/* Data Rows */}
            {comparisonData.map((row, i) => (
              <>
                <div
                  key={`feature-${i}`}
                  className="bg-card p-4 text-foreground font-medium text-sm border-t border-border/40"
                >
                  {row.feature}
                </div>
                <div
                  key={`human-${i}`}
                  className="bg-card p-4 text-muted-foreground text-sm text-center border-t border-border/40"
                >
                  {row.human}
                </div>
                <div
                  key={`digital-${i}`}
                  className={`p-4 text-sm text-center border-t border-border/40 border-l-2 border-primary ${row.highlight ? "bg-primary/5 text-primary font-semibold" : "bg-card text-foreground"}`}
                >
                  {row.digital}
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 border border-border/40 bg-card">
            <div className="text-3xl font-black text-primary mb-2">85-90%</div>
            <div className="text-sm text-muted-foreground">
              Cost Savings per Task
            </div>
          </div>
          <div className="text-center p-6 border border-border/40 bg-card">
            <div className="text-3xl font-black text-primary mb-2">4.2x</div>
            <div className="text-sm text-muted-foreground">
              More Hours per Week
            </div>
          </div>
          <div className="text-center p-6 border border-border/40 bg-card">
            <div className="text-3xl font-black text-primary mb-2">9,000</div>
            <div className="text-sm text-muted-foreground">
              Hours/Year (vs 2,000 human)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MonetizationModels() {
  const models = [
    {
      icon: "💼",
      titleId: "homepage.monetize.model1.title",
      priceId: "homepage.monetize.model1.price",
      descId: "homepage.monetize.model1.description",
      bestForId: "homepage.monetize.model1.bestFor",
      title: "Digital FTE Subscription",
      price: "$1k+/month",
      description:
        "Fully managed, hosted agent. Hands-off automation for clients.",
      bestFor: "Agencies, Consultants",
    },
    {
      icon: "🎯",
      titleId: "homepage.monetize.model2.title",
      priceId: "homepage.monetize.model2.price",
      descId: "homepage.monetize.model2.description",
      bestForId: "homepage.monetize.model2.bestFor",
      title: "Success Fee",
      price: "Pay-per-result",
      description:
        "Commission on outcomes. $5 per lead, 2% of savings identified.",
      bestFor: "High-trust partnerships",
    },
    {
      icon: "📜",
      titleId: "homepage.monetize.model3.title",
      priceId: "homepage.monetize.model3.price",
      descId: "homepage.monetize.model3.description",
      bestForId: "homepage.monetize.model3.bestFor",
      title: "License the Recipe",
      price: "Annual/Perpetual",
      description:
        "Sell your SKILL.md logic to enterprises who run it in-house.",
      bestFor: "Defense, FinTech, Healthcare",
    },
    {
      icon: "🏪",
      titleId: "homepage.monetize.model4.title",
      priceId: "homepage.monetize.model4.price",
      descId: "homepage.monetize.model4.description",
      bestForId: "homepage.monetize.model4.bestFor",
      title: "Skill Marketplace",
      price: "Volume-based",
      description: "Sell modular expertise packs via OpenAI Apps or SkillPort.",
      bestFor: "Niche expertise at scale",
    },
  ];

  return (
    <section className="py-24 border-b border-border/40 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            <Translate id="homepage.monetize.badge">Monetize Your Expertise</Translate>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <Translate id="homepage.monetize.heading">Four Ways to Profit from AI Agents</Translate>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <Translate id="homepage.monetize.description">Your domain knowledge—whether in sales, legal, finance, or any field—can become a</Translate> {" "}
            <span className="text-foreground font-semibold">
              <Translate id="homepage.monetize.recurringRevenue">recurring revenue stream</Translate>
            </span>
            .
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, i) => (
            <Card
              key={i}
              className="border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-4xl mb-4">{model.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  <Translate id={model.titleId}>{model.title}</Translate>
                </h3>
                <p className="text-primary font-semibold text-sm mb-3">
                  <Translate id={model.priceId}>{model.price}</Translate>
                </p>
                <p className="text-muted-foreground text-sm flex-grow mb-4">
                  <Translate id={model.descId}>{model.description}</Translate>
                </p>
                <div className="pt-3 border-t border-border/40">
                  <span className="text-xs text-muted-foreground">
                    Best for:{" "}
                  </span>
                  <span className="text-xs text-foreground font-medium">
                    <Translate id={model.bestForId}>{model.bestFor}</Translate>
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgentFactoryThesis() {
  return (
    <section className="py-24 border-b border-border/40 bg-primary/5">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Mark */}
          <div className="text-6xl text-primary/30 mb-6">"</div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-8">
            <Translate id="homepage.thesis.heading">Build Digital FTEs that work 24/7. Your domain expertise—whether in sales, legal, finance, or healthcare—becomes an autonomous AI agent that never sleeps.</Translate>
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            <Translate id="homepage.thesis.subheading">Transform your knowledge into scalable digital products that generate</Translate>
            <span className="text-foreground font-semibold">
              {" "}
              <Translate id="homepage.thesis.recurringRevenue">recurring revenue</Translate>
            </span>{" "}
            <Translate id="homepage.thesis.subheadingEnd">while you sleep.</Translate>
          </p>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 border border-border/40 bg-background">
              <div className="text-2xl mb-3">🏭</div>
              <h3 className="font-bold text-foreground mb-2"><Translate id="homepage.thesis.manufacture.title">Manufacture</Translate></h3>
              <p className="text-sm text-muted-foreground">
                <Translate id="homepage.thesis.manufacture.desc">Use AI Coding Agents (Claude Code) to build your expertise into deployable agents</Translate>
              </p>
            </div>
            <div className="p-6 border border-border/40 bg-background">
              <div className="text-2xl mb-3">📦</div>
              <h3 className="font-bold text-foreground mb-2"><Translate id="homepage.thesis.package.title">Package</Translate></h3>
              <p className="text-sm text-muted-foreground">
                <Translate id="homepage.thesis.package.desc">Bundle into production-ready Digital FTEs with OpenAI or Anthropic Agent SDKs</Translate>
              </p>
            </div>
            <div className="p-6 border border-border/40 bg-background">
              <div className="text-2xl mb-3">💰</div>
              <h3 className="font-bold text-foreground mb-2"><Translate id="homepage.thesis.monetize.title">Monetize</Translate></h3>
              <p className="text-sm text-muted-foreground">
                <Translate id="homepage.thesis.monetize.desc">Sell as managed subscriptions, success fees, or enterprise licenses</Translate>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 border-b border-border/40 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 text-center pt-12 pb-12 min-h-[400px] flex flex-col items-center justify-center">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          <Translate id="homepage.cta.heading">Ready to Build Your Agent Factory?</Translate>
        </h3>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          <Translate id="homepage.cta.description">Transform your domain expertise into Digital FTEs that work 24/7 and generate recurring revenue</Translate>
        </p>
        <Button
          variant="outline"
          size="lg"
          className="h-14 px-8 text-lg font-semibold"
          asChild
        >
          <Link to="/docs/about">Start Reading</Link>
        </Button>
      </div>
    </section>
  );
}

// Skeleton fallback for lazy-loaded IDE section
function IDEShowcaseSkeleton() {
  return (
    <section className="hidden md:flex min-h-[90vh] items-center justify-center py-6 pb-12 md:pb-20 rounded-xl allow-rounded bg-background">
      <div className="w-[95%] max-w-[1800px] mx-auto px-6 h-full">
        <div className="allow-rounded w-full overflow-hidden bg-[#1e1e1e] h-[calc(90vh-48px)] flex flex-col rounded-xl animate-pulse">
          {/* Title bar skeleton */}
          <div className="flex items-center px-3 py-2.5 bg-[#323232] rounded-t-xl">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]/50" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]/50" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]/50" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="h-6 w-40 bg-[#2d2d2d] rounded" />
            </div>
          </div>
          {/* Content skeleton */}
          <div className="flex flex-1">
            {/* Sidebar */}
            <div className="w-12 bg-[#262626] flex flex-col items-center pt-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-6 h-6 bg-[#3d3d3d] rounded" />
              ))}
            </div>
            {/* Code area */}
            <div className="flex-1 p-4 space-y-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-4 bg-[#3d3d3d] rounded" />
                  <div
                    className="h-4 bg-[#3d3d3d] rounded"
                    style={{ width: `${Math.random() * 40 + 30}%` }}
                  />
                </div>
              ))}
            </div>
            {/* Chat panel */}
            <div className="w-80 bg-[#252526] p-4 space-y-4">
              <div className="h-6 w-24 bg-[#3d3d3d] rounded" />
              <div className="h-20 bg-[#3d3d3d] rounded" />
              <div className="h-20 bg-[#3d3d3d] rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const preloadBookCover = useBaseUrl("/img/book-cover-page.webp");
  return (
    <Layout
      title="The AI Agent Factory"
      description="The Spec-Driven Blueprint for Building and Monetizing Digital FTEs—Reliable AI Agents You Can Trust, Deploy, and Scale."
    >
      {/* Preload LCP image for faster paint */}
      <Head>
        <link
          rel="preload"
          as="image"
          href={preloadBookCover}
          type="image/webp"
        />
      </Head>
      <HomepageHeader />
      <AgentFactoryThesis />
      <DigitalFTEComparison />
      <AISpectrumSection />
      <FeaturesSection />
      <MaturityLevelsSection />
      <ParadigmShift />
      {/* Lazy-loaded IDE showcase with skeleton fallback */}
      <Suspense fallback={<IDEShowcaseSkeleton />}>
        <IDEShowcaseSection />
      </Suspense>
      <MonetizationModels />
      <FinalCTA />
    </Layout>
  );
}
