import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, Download, Award, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary py-20 border-b border-border">
        <div className="container">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              19年間の現場経験を持つ製造業DXコンサルタント。
              「現場」のリアリティとデジタル戦略の架け橋となります。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Profile & Story */}
          <div className="lg:col-span-8 space-y-12">
            {/* Professional Summary */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-chart-1"></span>
                プロフェッショナルサマリー
              </h2>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  19年間一貫して製造業（半導体・医療機器・建設機械）の生産性向上に従事してきました。
                </p>
                <p>
                  キヤノン系列での16年間は、半導体露光装置の市場サポート部門でソフトエンジニア・PMとして従事。開発と顧客をつなぐ立場から顧客工場の現場に深く入り込み、製造現場の制約や文化、現場の本質的な課題を肌感覚で理解しました。
                </p>
                <p>
                  現在は、この現場経験を基盤に製造業DXコンサルタントとして活動しています。医療機器・建設機械メーカーにおいて、潜在的な課題を可視化・構造化し、データ活用基盤構築やAI導入などの長期ビジョンを描きながら具体的な戦略を策定。3〜6ヶ月のPoCで効果を検証し、作業時間削減や生産性向上などの成果を積み上げながら、本格実行まで一貫して支援しています。
                </p>
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-chart-1"></span>
                職務経歴
              </h2>
              
              <div className="relative border-l border-border ml-3 space-y-12">
                {[
                  {
                    period: "2022年11月 - 現在",
                    role: "プロジェクトリーダー / DXコンサルタント",
                    company: "グロースエクスパートナーズ株式会社",
                    desc: "エンタープライズ向けDX推進・企画をリード。医療機器・建設機械メーカー向けのプロジェクトを推進。"
                  },
                  {
                    period: "2010年1月 - 2022年10月",
                    role: "ソフトエンジニア / プロジェクトリーダー",
                    company: "キヤノン株式会社",
                    desc: "半導体露光装置の市場サポート業務に従事。機械学習を用いた歩留まり改善プロジェクトを主導。"
                  },
                  {
                    period: "2006年4月 - 2009年12月",
                    role: "フィールドエンジニア / システム開発",
                    company: "キヤノンマーケティングジャパン株式会社",
                    desc: "半導体製造装置のサービスおよびシステム開発を担当。"
                  }
                ].map((job, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-chart-1 ring-4 ring-background" />
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <span className="hidden sm:inline text-muted-foreground">•</span>
                      <span className="text-primary font-medium">{job.company}</span>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground bg-secondary px-2 py-1 inline-block mb-3">
                      {job.period}
                    </span>
                    <p className="text-muted-foreground">
                      {job.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills & Certs */}
          <div className="lg:col-span-4 space-y-10">
            {/* Skills */}
            <div className="bg-secondary/30 p-8 border border-border">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-chart-1" />
                技術スキル
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">クラウド・インフラ</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Azure (5年以上)", "GCP", "Linux"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-background border border-border text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">開発言語・FW</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "React.js", "Ruby on Rails", "PostgreSQL"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-background border border-border text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">データ解析・GIS</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Mapbox", "GeoServer", "リモートセンシング", "画像解析"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-background border border-border text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-secondary/30 p-8 border border-border">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-chart-1" />
                保有資格
              </h3>
              <ul className="space-y-3">
                {[
                  "Google Cloud Associate Cloud Engineer",
                  "応用情報技術者",
                  "基本情報技術者",
                  "テクニカルエンジニア（ネットワーク）",
                  "テクニカルエンジニア（データベース）"
                ].map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-chart-1 mt-0.5 shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Resume */}
            <div className="p-8 bg-primary text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">職務経歴書をダウンロード</h3>
              <p className="text-primary-foreground/70 text-sm mb-6">
                詳細な職務経歴とプロジェクト実績をご確認いただけます。
              </p>
              <Button variant="outline" className="w-full border-white/30 hover:bg-white/10 text-white gap-2" asChild>
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" /> PDFダウンロード
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
