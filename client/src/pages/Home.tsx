import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Cpu, Globe, Layers, Award, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary text-primary-foreground">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          
          {/* Abstract Grid Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMMDQgMEgwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        </div>

        <div className="container relative z-10 pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl space-y-6"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-chart-1/20 border border-chart-1/30 text-chart-1 text-sm font-mono backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-chart-1 animate-pulse" />
              Manufacturing DX Consultant
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              現場の<span className="text-chart-1">リアリティ</span>と<br />
              戦略的視点の融合。
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              半導体・医療機器・建設機械業界で19年の経験。
              現場の制約や文化を深く理解した上で、データとAIを活用した「実現可能なDX」を推進します。
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-chart-1 hover:bg-chart-1/90 text-white rounded-none border-0" asChild>
                <Link href="/projects">
                  プロジェクト実績を見る <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 rounded-none" asChild>
                <Link href="/about">経歴・スキル詳細</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Core Competencies */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
              <div className="h-1 w-20 bg-chart-1" />
            </div>
            <p className="text-muted-foreground max-w-md text-right md:text-left">
              現場経験とコンサルティングスキルを掛け合わせ、確実な成果を創出します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="h-10 w-10 text-chart-1" />,
                title: "現場起点の課題発見力",
                desc: "16年間の市場サポート部門での経験により、製造現場の制約・文化・本質的な課題を肌感覚で理解。データだけでは見えない根本原因を特定します。"
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-chart-1" />,
                title: "戦略から実行までの一貫支援",
                desc: "長期ビジョン策定から3〜6ヶ月のPoCによる効果検証、そして本格展開まで責任を持って伴走。作業時間30%削減や稼働率15%向上などの成果を実現します。"
              },
              {
                icon: <Cpu className="h-10 w-10 text-chart-1" />,
                title: "データ活用・AI導入の実行力",
                desc: "AzureやPython、GISを活用した具体的なソリューションを企画・開発。機械学習による画像判別など、現場で使える技術実装をリードします。"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 border border-border bg-card hover:border-chart-1/50 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="text-6xl font-mono font-bold text-foreground">{`0${index + 1}`}</div>
                </div>
                <div className="mb-6 p-3 bg-secondary w-fit group-hover:bg-chart-1/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
            <Button variant="outline" className="hidden md:flex rounded-none gap-2" asChild>
              <Link href="/projects">すべてのプロジェクトを見る <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="space-y-20">
            {/* Project 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video overflow-hidden border border-border group"
              >
                <img 
                  src="/images/manufacturing-dx.jpg" 
                  alt="Forestry DX Platform" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
                  <span>建設機械メーカー</span>
                  <span className="w-1 h-1 bg-chart-1 rounded-full" />
                  <span>2023 - 2024</span>
                </div>
                <h3 className="text-3xl font-bold">林業DXプラットフォームの戦略策定・構築</h3>
                <p className="text-muted-foreground leading-relaxed">
                  リモートセンシングデータとGIS解析を活用したデータプラットフォームを構築し、林業の作業計画最適化を実現。
                  ユーザー中心のPoCを通じて、<span className="text-foreground font-semibold">作業計画立案時間を約30%短縮</span>し、<span className="text-foreground font-semibold">利用率90%超</span>を達成しました。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Azure", "Mapbox", "React", "GeoServer"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-background border border-border text-xs font-mono text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="link" className="p-0 h-auto text-chart-1 hover:text-chart-1/80" asChild>
                  <Link href="/projects">詳細を見る <ChevronRight className="h-4 w-4 ml-1" /></Link>
                </Button>
              </motion.div>
            </div>

            {/* Project 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video overflow-hidden border border-border group lg:order-2"
              >
                <img 
                  src="/images/data-analysis.jpg" 
                  alt="Semiconductor Yield Improvement" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 lg:order-1"
              >
                <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
                  <span>半導体メーカー</span>
                  <span className="w-1 h-1 bg-chart-1 rounded-full" />
                  <span>2018 - 2022</span>
                </div>
                <h3 className="text-3xl font-bold">半導体露光装置の稼働率改善プロジェクト</h3>
                <p className="text-muted-foreground leading-relaxed">
                  機械学習を用いた検査画像の自動判別システムを開発し、判定精度の安定化を実現。
                  <span className="text-foreground font-semibold">装置稼働率を15%向上</span>させ、<span className="text-foreground font-semibold">誤判定率を50%削減</span>しました。
                  <span className="block mt-2 flex items-center gap-2 text-chart-1 font-semibold"><Award className="h-4 w-4" /> 顧客内100プロジェクト中で最優秀賞を受賞</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Machine Learning", "Linux", "Agile"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-background border border-border text-xs font-mono text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="link" className="p-0 h-auto text-chart-1 hover:text-chart-1/80" asChild>
                  <Link href="/projects">詳細を見る <ChevronRight className="h-4 w-4 ml-1" /></Link>
                </Button>
              </motion.div>
            </div>
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" className="rounded-none w-full" asChild>
              <Link href="/projects">すべてのプロジェクトを見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]" />
        
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">製造プロセスの変革をご検討ですか？</h2>
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            現場のリアリティとデジタル戦略のギャップを埋めるお手伝いをします。
            コンサルティングやプロジェクトのご相談はお気軽にご連絡ください。
          </p>
          <Button size="lg" className="bg-chart-1 hover:bg-chart-1/90 text-white rounded-none px-8 h-14 text-lg" asChild>
            <Link href="/contact">お問い合わせはこちら</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
