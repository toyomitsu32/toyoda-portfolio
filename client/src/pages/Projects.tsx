import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Calendar, Users, Target, Zap } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "forestry-dx",
      title: "林業DXプラットフォームの戦略策定・構築",
      client: "大手建設機械メーカー",
      period: "2023年10月 - 2024年6月",
      role: "プロジェクトリーダー（3〜7名体制）",
      image: "/images/manufacturing-dx.jpg",
      tags: ["Azure", "Mapbox", "GeoServer", "React", "Rails"],
      challenge: "林業事業の生産性向上が急務であるものの、データ活用の具体策が不明瞭。現場作業員のデジタルリテラシーの低さも障壁となっていました。",
      approach: "リモートセンシングデータとGIS解析による「作業計画最適化」を優先テーマに設定し、3年ロードマップを策定。オフラインでも使えるマップアプリを開発し、3ヶ月のPoCを実施しました。",
      results: [
        "作業計画立案時間を約30%短縮（PoC検証結果）",
        "現場作業員から「使いやすい」と高評価を得て利用率90%超を達成",
        "PoC成功により本格投資の承認を獲得し、全国展開へ"
      ]
    },
    {
      id: "dialysis-system",
      title: "透析情報管理システムの事業変革支援",
      client: "大手医療機器メーカー",
      period: "2023年11月 - 現在",
      role: "プロジェクトリーダー（5〜7名体制）",
      image: "/images/global-collaboration.jpg",
      tags: ["Azure", "React.js", "Ruby on Rails", "PostgreSQL"],
      challenge: "国内市場の頭打ちから、グローバル展開とデータビジネスへの事業転換が急務。しかし、既存システムの課題が未整理で、海外拠点との協業体制も未整備な状態でした。",
      approach: "ワークショップを通じて既存システムの課題を可視化し、透析データを活用した長期ビジョンを策定。ベルギー拠点に2ヶ月駐在して開発体制を立ち上げ、多様なステークホルダーとの調整を主導しました。",
      results: [
        "透析データビジネスの長期ロードマップについて経営層の承認を獲得",
        "ベルギー拠点との協業体制を確立し、グローバル展開の基盤を構築",
        "営業支援データ分析基盤のPoC（現在進行中）へと接続"
      ]
    },
    {
      id: "semiconductor-yield",
      title: "半導体露光装置の稼働率改善プロジェクト",
      client: "キヤノン株式会社",
      period: "2018年1月 - 2022年10月",
      role: "プロジェクトリーダー（7名体制）",
      image: "/images/data-analysis.jpg",
      tags: ["Linux", "Python", "Machine Learning", "Agile"],
      challenge: "装置のダウンタイムが長く、検査画像の判別作業を人手に依存していたため、生産性と判定精度に課題がありました。",
      approach: "稼働データを分析してダウンタイムの主要因を特定。機械学習による検査画像の自動判別システムを開発し、顧客との共同体制でアジャイル開発を推進しました。",
      results: [
        "装置稼働率を15%向上",
        "誤判定率を50%削減し、検査精度を安定化",
        "顧客内100プロジェクト中で最優秀賞を受賞"
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary py-20 border-b border-border">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Selected Projects</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              戦略的実行と技術実装のショーケース。
              製造業DXを推進した具体的なプロジェクト実績をご紹介します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20">
        <div className="container space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Project Image (Sticky on Desktop) */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
                <div className="relative aspect-[4/3] overflow-hidden border border-border group bg-secondary">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-secondary border border-border text-xs font-mono text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-7 space-y-10">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-mono text-muted-foreground mb-4">
                    <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {project.period}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-2"><Users className="h-4 w-4" /> {project.role}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h2>
                  <p className="text-lg text-primary font-medium">{project.client}</p>
                </div>

                <div className="space-y-8">
                  <div className="bg-secondary/30 p-6 border-l-2 border-chart-1">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5 text-chart-1" /> 課題
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3">アプローチ</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.approach}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-chart-1" /> 主な成果
                    </h3>
                    <ul className="space-y-3">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-chart-1 mt-2 shrink-0" />
                          <span className="text-foreground/90">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">プロジェクトのご相談はこちら</h2>
          <p className="text-muted-foreground mb-8">
            製造業DXに関する新しい機会について、いつでもご相談を受け付けております。
            貴社の課題解決にどのように貢献できるか、ぜひお話しさせてください。
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none" asChild>
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
