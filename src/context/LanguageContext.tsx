import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ja";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Comprehensive dictionary mapping exact English UI strings to the user's Japanese translations
const translations: Record<string, Record<Language, string>> = {
  // Navigation

  // Home Page - Slider

  // Home Page - Businesses Section
  "OUR BUSINESS": { en: "OUR BUSINESS", ja: "OUR BUSINESS" },
  "Five Fields of": { en: "Five Fields of", ja: "5つの事業" },
  "Synergy": { en: "Synergy", ja: "" },
  "Connecting Sri Lanka and Japan through five business fields — foods, vehicles, software, consulting and gemstones.": {
    en: "Connecting Sri Lanka and Japan through five business fields — foods, vehicles, software, consulting and gemstones.",
    ja: "食品・中古車・システム開発・コンサルティング・宝石 ―\nスリランカと日本、そして世界を繋ぐ5つの事業。"
  },
  "Trading and exporting quality Japanese passenger cars, commercial vans, and heavy industrial machinery. English-negotiations supported.": {
    en: "Trading and exporting quality Japanese passenger cars, commercial vans, and heavy industrial machinery. English-negotiations supported.",
    ja: "乗用車から重機まで、国内売買と海外輸出に対応。英語での商談も可能です。"
  },
  "Tailored digital products, business automation, and AI integrations. Built by a team that understands real-world business operations.": {
    en: "Tailored digital products, business automation, and AI integrations. Built by a team that understands real-world business operations.",
    ja: "システム開発・保守、デジタルマーケティング、AIによる業務効率化を支援します。"
  },
  "Leveraging our local operational experience and international network to provide hands-on strategic advisory and corporate branding.": {
    en: "Leveraging our local operational experience and international network to provide hands-on strategic advisory and corporate branding.",
    ja: "実業経験と海外ネットワークを活かし、経営・ブランディング・海外展開を伴走支援。"
  },
  "Direct sourcing of loose blue sapphires, rare padparadscha, and fine jewelry. Lab certifications and custom anniversary designs available.": {
    en: "Direct sourcing of loose blue sapphires, rare padparadscha, and fine jewelry. Lab certifications and custom anniversary designs available.",
    ja: "スリランカ産ブルーサファイアやパパラチアなどを現地買付で直輸入。卸・小売・オーダーに対応。"
  },
  "VIEW MORE": { en: "VIEW MORE", ja: "VIEW MORE" },

  // Home Page - About Us Preview
  "ABOUT US": { en: "ABOUT US", ja: "ABOUT US" },
  "Under this philosophy, our mission is to deliver products and services of the highest quality to as many people as possible.": {
    en: "Under this philosophy, our mission is to deliver products and services of the highest quality to as many people as possible.",
    ja: "この理念のもと、より多くの人々に最高な品質の商品 and サービスを提供することを使命とし、様々な場で活動してまいりました。"
  },
  "Through HARITA, people feel energised, healed, inspired and encouraged. We believe such products and services are needed now more than ever, and we continue to refine our work and contribute to society.": {
    en: "Through HARITA, people feel energised, healed, inspired and encouraged. We believe such products and services are needed now more than ever, and we continue to refine our work and contribute to society.",
    ja: "この理念のもと、より多くの人々に最高な品質の商品とサービスを提供することを使命とし、様々な場で活動してまいりました。HARITAによって人々は元気になり、癒やされ、インスピレーションを得て、勇気付けられる。そんな存在であり続けます。"
  },
  "View Profile": { en: "View Profile", ja: "会社案内を見る" },

  // Home Page - Pick Up Section
  "PICK UP": { en: "PICK UP", ja: "PICK UP" },
  "Ceylon Cinnamon Powder": { en: "Ceylon Cinnamon Powder", ja: "セイロンシナモンパウダー" },
  "Premium cinnamon ground to a fine powder — perfect for baking, desserts, or adding a warm aroma to coffees and teas.": {
    en: "Premium cinnamon ground to a fine powder — perfect for baking, desserts, or adding a warm aroma to coffees and teas.",
    ja: "毎日の料理や飲み物に。ふわりと上品に香る万能パウダー。"
  },
  "Cloves": { en: "Cloves", ja: "クローブ" },
  "Highly aromatic whole cloves direct from Sri Lankan growers — a staple for authentic curries, spice blends, and hot drinks.": {
    en: "Highly aromatic whole cloves direct from Sri Lankan growers — a staple for authentic curries, spice blends, and hot drinks.",
    ja: "カレーやチャイに欠かせない、香り高いスリランカ産クローブ。"
  },
  "Spice Gift Set": { en: "Spice Gift Set", ja: "スパイスセット" },
  "An elegant gift box featuring our signature Ceylon cinnamon sticks, premium cloves, and selected spices. Ideal for gifting.": {
    en: "An elegant gift box featuring our signature Ceylon cinnamon sticks, premium cloves, and selected spices. Ideal for gifting.",
    ja: "シナモン＆クローブなど、人気スパイスを詰め合わせたギフトセット。"
  },

  // Home Page - News Section
  "NEWS & EVENTS": { en: "NEWS & EVENTS", ja: "NEWS & EVENTS" },
  "Latest Updates": { en: "Latest Updates", ja: "ニュース" },
  "Royal Cashew is now available at our Rakuten store": {
    en: "Royal Cashew is now available at our Rakuten store",
    ja: "「Royal Cashew」楽天ショップでの取り扱いを開始しました"
  },
  "Our official website has been renewed": {
    en: "Our official website has been renewed",
    ja: "公式サイトをリニューアルしました"
  },
  "We spoke at the Cinnamon Seminar by the Embassy of Sri Lanka": {
    en: "We spoke at the Cinnamon Seminar by the Embassy of Sri Lanka",
    ja: "スリランカ大使館主催シナモンセミナーに登壇しました"
  },

  // Home Page - Online Store Section
  "ONLINE STORE": { en: "ONLINE STORE", ja: "オンラインストア" },
  "Our Channels": { en: "Our Channels", ja: "オンラインストア" },
  "HARITA Online": { en: "HARITA Online", ja: "公式オンラインショップ" },
  "Official Online Shop": { en: "Official Online Shop", ja: "HARITA Online" },
  "Rakuten": { en: "Rakuten", ja: "楽天市場店" },
  "Rakuten Ichiba": { en: "Rakuten Ichiba", ja: "Rakuten" },
  "Amazon": { en: "Amazon", ja: "Amazon店" },
  "Amazon Store": { en: "Amazon Store", ja: "Amazon" },
  "Department Store": { en: "Department Store", ja: "百貨店オンラインストア" },
  "Department Store Online": { en: "Department Store Online", ja: "Department Store Online" },

  // Home Page - Contact Callout
  "For business inquiries or consultations,": { en: "For business inquiries or consultations,", ja: "事業のご相談・お取引は" },
  "please feel free to contact us.": { en: "please feel free to contact us.", ja: "お気軽にお問い合わせください" },
  "Our dedicated managers across food wholesale, vehicle export, systems, consulting, and gemstones will respond to your needs.": {
    en: "Our dedicated managers across food wholesale, vehicle export, systems, consulting, and gemstones will respond to your needs.",
    ja: "輸入卸・中古車輸出・システム開発・コンサルティング・宝石卸 ― 各事業の専門窓口が対応します。"
  },

  // Footer
  "HARITA INTERNATIONAL": { en: "HARITA INTERNATIONAL", ja: "HARITA\nHARITA INTERNATIONAL\n株式会社ハリタ・インターナショナル" },
  "MENU": { en: "MENU", ja: "メニュー" },

  // About Page
  "About Us": { en: "About Us", ja: "会社案内" },
  "Message": { en: "Message", ja: "代表メッセージ" },
  "\"HARITA was born from a desire to build a bridge between my home country, Sri Lanka, and Japan.\"": {
    en: "\"HARITA was born from a desire to build a bridge between my home country, Sri Lanka, and Japan.\"",
    ja: "HARITAは、母国スリランカと日本の架け橋になりたいという想いから生まれました。セイロンシナモンをはじめとする自然の恵み、美しい宝石、そして人と人との出会い。国境を越えて「本物」を届けることが私たちの仕事です。"
  },
  "Our journey started with importing fine spices, and has since expanded into automotive export, software solutions, and advisory services. No matter the industry, our underlying vision remains unchanged: connecting people. We will continue to deliver quality and build trust for our clients' lives and businesses.": {
    en: "Our journey started with importing fine spices, and has since expanded into automotive export, software solutions, and advisory services. No matter the industry, our underlying vision remains unchanged: connecting people. We will continue to deliver quality and build trust for our clients' lives and businesses.",
    ja: "食品輸入から始まった事業は、中古車輸出、システム開発、コンサルティングへと広がりました。分野は違っても、根底にあるのは「人と人を繋ぐ」という変わらぬ理念です。これからも品質と信頼を第一に、皆さまの暮らしとビジネスに貢献してまいります。"
  },
  "Company Profile": { en: "Company Profile", ja: "会社概要" },
  "Overview": { en: "Overview", ja: "会社概要" },
  "Contact Info": { en: "Contact Info", ja: "連絡先" },
  "Business Areas": { en: "Business Areas", ja: "事業内容" },
  "1. Import and sale of foods and spices": { en: "1. Import and sale of foods and spices", ja: "1. 食品・雑貨の輸入、卸、小売販売" },
  "2. Used vehicles & machinery domestic sale and export": { en: "2. Used vehicles & machinery domestic sale and export", ja: "2. 中古車（重機含む）売買（国内・国外）" },
  "3. Software development, systems, digital marketing, AI automation": { en: "3. Software development, systems, digital marketing, AI automation", ja: "3. ソフトウェア／システム開発、保守（デジタルマーケティング・AI業務効率化を含む）" },
  "4. Corporate strategy and branding consulting": { en: "4. Corporate strategy and branding consulting", ja: "4. コンサルティング（企業・個人・ブランディング）" },
  "5. Sourcing and sale of gemstones and jewellery": { en: "5. Sourcing and sale of gemstones and jewellery", ja: "5. 宝石・アクセサリーの輸入販売（卸・小売）" },
  "Licenses": { en: "Licenses", ja: "許認可" },
  "Antiques Dealer License: [Set number]": { en: "Antiques Dealer License: [Set number]", ja: "古物商許可　【許可番号を記入】" },
  "Food importer notification under Food Sanitation Act": { en: "Food importer notification under Food Sanitation Act", ja: "食品衛生法に基づく輸入者届出" },
  "Main Clients": { en: "Main Clients", ja: "主要取引先" },
  "Milestones": { en: "Milestones", ja: "沿革" },
  "[Set Month/Year]": { en: "[Set Month/Year]", ja: "【年月を記入】" },
  "HARITA INTERNATIONAL CO., LTD. established": { en: "HARITA INTERNATIONAL CO., LTD. established", ja: "株式会社ハリタ・インターナショナル設立" },
  "Commenced import and sale of Sri Lankan spices and foods": { en: "Commenced import and sale of Sri Lankan spices and foods", ja: "スリランカ産食品の輸入・販売を開始" },
  "Expanded online sales (Amazon, Rakuten, and official online shop)": { en: "Expanded online sales (Amazon, Rakuten, and official online shop)", ja: "オンライン販売を本格化（Amazon・楽天市場・公式EC）" },
  "Products listed and sold in major department stores": { en: "Products listed and sold in major department stores", ja: "【年月を記入】　大手百貨店での取り扱い開始" },
  "Launched vehicle export, software solutions, and gemstone divisions": { en: "Launched vehicle export, software solutions, and gemstone divisions", ja: "【年月を記入】　中古車・重機の売買、宝石輸入販売、システム開発事業を開始" },
  "Corporate website fully redesigned": { en: "Corporate website fully redesigned", ja: "コーポレートサイトを全面リニューアル" },

  // News Page
  "News & Events": { en: "News & Events", ja: "ニュース＆イベント" },
  "Articles": { en: "Articles", ja: "お知らせ" },
  "All": { en: "All", ja: "ALL" },
  "Food": { en: "Food", ja: "食品" },
  "Event": { en: "Event", ja: "イベント" },
  "*News updates can be managed through the administration panel once CMS integration is completed (refer to developer guidelines).": {
    en: "*News updates can be managed through the administration panel once CMS integration is completed (refer to developer guidelines).",
    ja: "※ニュースの更新はCMS導入後に管理画面から行えるようになります（開発者向け指示書参照）。"
  },

  // Contact Page
  "Contact us for business opportunities, spice wholesales, vehicle orders, software development, consulting or gemstones. Please select a topic below and submit the form. We normally reply within 2 business days.": {
    en: "Contact us for business opportunities, spice wholesales, vehicle orders, software development, consulting or gemstones. Please select a topic below and submit the form. We normally reply within 2 business days.",
    ja: "商品のご購入・卸売・中古車輸出・システム開発・コンサルティング・宝石 ― 内容を選択のうえ、フォームよりお送りください。通常2営業日以内にご返信いたします。"
  },
  "Optional": { en: "Optional", ja: "任意" },
  "Submit Inquiry": { en: "Submit Inquiry", ja: "送信する" },
  "Your message has been sent successfully. We will get back to you shortly.": {
    en: "Your message has been sent successfully. We will get back to you shortly.",
    ja: "送信が完了しました。担当者よりご連絡いたします。"
  },
  "Or reach us directly via Phone, FAX or Email": { en: "Or reach us directly via Phone, FAX or Email", ja: "お電話・FAXでのお問い合わせ" },
  "TEL: +81-50-5359-0767 (9:00-17:00 JST) / FAX: +81-55-213-5957": {
    en: "TEL: +81-50-5359-0767 (9:00-17:00 JST) / FAX: +81-55-213-5957",
    ja: "TEL：+81-50-5359-0767（受付時間 9:00〜17:00）／ FAX：+81-55-213-5957"
  },

  // Foods Page
  "Pure Ceylon spices directly from plantations to your table.": {
    en: "Pure Ceylon spices directly from plantations to your table.",
    ja: "スリランカの恵みを、食卓へ。"
  },
  "HARITA is a brand dedicated to importing natural Sri Lankan foods directly from local growers. Focusing on premium Ceylon cinnamon, we deliver cloves, curry spices, and wellness herbal teas that preserve natural goodness. Available for wholesale, retail, and online purchase.": {
    en: "HARITA is a brand dedicated to importing natural Sri Lankan foods directly from local growers. Focusing on premium Ceylon cinnamon, we deliver cloves, curry spices, and wellness herbal teas that preserve natural goodness. Available for wholesale, retail, and online purchase.",
    ja: "HARITAは、スリランカの豊かな自然が育んだ食品を現地から直輸入するブランドです。主力のセイロンシナモンをはじめ、クローブ、カレースパイス、シナモンハーブティーなど、素材の力をそのまま活かした商品をお届けします。卸売から小売、オンライン販売まで幅広く展開しています。"
  },
  "Our Products": { en: "Our Products", ja: "取扱商品" },
  "Pure spices, herbs and gifts.": { en: "Pure spices, herbs and gifts.", ja: "取扱商品" },
  "Ceylon Cinnamon": { en: "Ceylon Cinnamon", ja: "セイロンシナモン" },
  "The 'queen of spices' with thousands of years of history. True cinnamon from Sri Lanka is prized for its refined, delicate aroma. Available in sticks and powder, for home and professional use.": {
    en: "The 'queen of spices' with thousands of years of history. True cinnamon from Sri Lanka is prized for its refined, delicate aroma. Available in sticks and powder, for home and professional use.",
    ja: "数千年の歴史を誇る「スパイスの女王」。スリランカ産の本物のシナモン（セイロンシナモン）は、上品で繊細な香りが特長です。スティック・パウダーの両方をご用意し、ご家庭用から業務用まで対応します。スリランカ大使館主催のシナモンセミナーへの登壇実績もございます。"
  },
  "Cloves & Curry Spices": { en: "Cloves & Curry Spices", ja: "クローブ・カレースパイス" },
  "From aromatic cloves to the authentic spices used in Sri Lankan curry, we import directly from trusted local partners and deliver them at the peak of their fragrance.": {
    en: "From aromatic cloves to the authentic spices used in Sri Lankan curry, we import directly from trusted local partners and deliver them at the peak of their fragrance.",
    ja: "カレーやチャイ、お菓子作りに欠かせないクローブをはじめ、スリランカカレーに使われる本格スパイスを取り揃えています。現地の信頼できるパートナーから直輸入し、香り高い状態でお届けします。"
  },
  "Cinnamon Herbal Tea": { en: "Cinnamon Herbal Tea", ja: "シナモンハーブティー" },
  "A caffeine-free herbal tea with the gentle, sweet aroma of Ceylon cinnamon — perfect from breakfast to bedtime.": {
    en: "A caffeine-free herbal tea with the gentle, sweet aroma of Ceylon cinnamon — perfect from breakfast to bedtime.",
    ja: "セイロンシナモンを使ったハーブティーは、ほんのり甘く香る、心やすらぐひとときにぴったりの一杯です。ノンカフェインで、朝食からおやすみ前まで幅広いシーンでお楽しみいただけます。"
  },
  "Gift Sets & General Goods": { en: "Gift Sets & General Goods", ja: "ギフトセット・雑貨" },
  "Gift sets combining favourites such as cinnamon and cloves, plus selected general goods from Sri Lanka — ideal for gifting and for enriching your store's line-up.": {
    en: "Gift sets combining favourites such as cinnamon and cloves, plus selected general goods from Sri Lanka — ideal for gifting and for enriching your store's line-up.",
    ja: "シナモンとクローブなど人気商品を組み合わせたギフトセットや、スリランカの雑貨も取り扱っています。大切な方への贈り物や、店舗の品揃えの充実にぜひご活用ください。"
  },
  "Import Process": { en: "Import Process", ja: "品質と輸入体制" },
  "Quality assurance steps.": { en: "Quality assurance steps.", ja: "品質と輸入体制" },
  "Buy Online": { en: "Buy Online", ja: "ご購入はこちら" },
  "Purchase cinnamon and spices.": { en: "Purchase cinnamon and spices.", ja: "ご購入はこちら" },
  "For corporate inquiries, custom wholesale packaging or OEM requests, please write to us via our inquiry form.": {
    en: "For corporate inquiries, custom wholesale packaging or OEM requests, please write to us via our inquiry form.",
    ja: "卸売・OEM・業務用仕入れをご希望の法人様は、お問い合わせフォームよりご相談ください。"
  },

  // Vehicles Page
  "Honest trading,": { en: "Honest trading,", ja: "AUTOMOBILE" },
  "one vehicle at a time.": { en: "one vehicle at a time.", ja: "1台ごとに、誠実な取引を。" },
  "We trade and export used vehicles — from passenger cars, trucks and vans to heavy construction machinery. Negotiations available in English with a strong track record with international buyers.": {
    en: "We trade and export used vehicles — from passenger cars, trucks and vans to heavy construction machinery. Negotiations available in English with a strong track record with international buyers.",
    ja: "乗用車・トラック・バンから重機（建設機械）まで、中古車両の国内売買と海外輸出を行っています。仕入れから整備・輸出手続きまで一貫して対応。英語での商談も可能で、海外バイヤー様との取引実績も豊富です。"
  },
  "Line-up": { en: "Line-up", ja: "取扱車両" },
  "Export vehicles we trade.": { en: "Export vehicles we trade.", ja: "取扱車両" },
  "Passenger Cars": { en: "Passenger Cars", ja: "乗用車" },
  "Sedans, SUVs and kei cars — for both domestic sale and export.": {
    en: "Sedans, SUVs and kei cars — for both domestic sale and export.",
    ja: "セダン・SUV・軽自動車など幅広く取り扱い。国内販売・輸出どちらにも対応します。"
  },
  "Trucks & Vans": { en: "Trucks & Vans", ja: "トラック・バン" },
  "Commercial trucks, vans and dump trucks, offered after condition checks.": {
    en: "Commercial trucks, vans and dump trucks, offered after condition checks.",
    ja: "商用トラック・バン・ダンプなど。稼働状態を確認のうえご紹介します。"
  },
  "Heavy Machinery": { en: "Heavy Machinery", ja: "重機・建設機械" },
  "Excavators, wheel loaders and other construction machinery in high overseas demand.": {
    en: "Excavators, wheel loaders and other construction machinery in high overseas demand.",
    ja: "ユンボ・ホイールローダー等の建設機械。海外需要の高い機種を中心に取り扱います。"
  },
  "Parts & More": { en: "Parts & More", ja: "パーツ・その他" },
  "Used parts and related equipment are also available on request.": {
    en: "Used parts and related equipment are also available on request.",
    ja: "中古部品や関連機材についてもご相談ください。"
  },
  "Export Flow": { en: "Export Flow", ja: "輸出の流れ" },
  "Steps from order to delivery.": { en: "Steps from order to delivery.", ja: "輸出の流れ" },
  "Provide your desired specifications, models, and destination port.": {
    en: "Provide your desired specifications, models, and destination port.",
    ja: "ご希望の車種・条件・仕向地をお知らせください。英語対応可。"
  },
  "Sourcing & Quote": { en: "Sourcing & Quote", ja: "車両提案・見積" },
  "We propose vehicles from our inventory or auction and issue a detailed quote.": {
    en: "We propose vehicles from our inventory or auction and issue a detailed quote.",
    ja: "オークション・在庫から最適な車両をご提案し、お見積りします。"
  },
  "Maintenance & Prep": { en: "Maintenance & Prep", ja: "整備・書類手続き" },
  "Complete safety inspections, maintenance, and export customs clearance documentation.": {
    en: "Complete safety inspections, maintenance, and export customs clearance documentation.",
    ja: "点検整備と輸出抹消・船積書類の作成を行います。"
  },
  "Shipping & Release": { en: "Shipping & Release", ja: "船積・お引き渡し" },
  "Ship the vehicle and release B/L and customs documents to you.": {
    en: "Ship the vehicle and release B/L and customs documents to you.",
    ja: "船積み後、B/L等の書類をお送りし、お引き渡し完了です。"
  },
  "Vehicle Inventory": { en: "Vehicle Inventory", ja: "在庫車両" },
  "Active vehicles in stock.": { en: "Active vehicles in stock.", ja: "在庫車両" },
  "Check our active sample listings. Click inquiry for price details, custom specifications search, and domestic trade inquiries. We support exports (English ok) and local retail sales.": {
    en: "Check our active sample listings. Click inquiry for price details, custom specifications search, and domestic trade inquiries. We support exports (English ok) and local retail sales.",
    ja: "現在販売中の車両一覧です。価格・状態は随時更新しています。気になる車両は「この車両について問い合わせる」からお気軽にどうぞ。海外への輸出（英語対応）にも、国内のお客様への販売にも対応しています。"
  },
  "Inquire about this vehicle": { en: "Inquire about this vehicle", ja: "この車両について問い合わせる" },
  "*Listed prices show Japan domestic retail prices with tax. For international export, we quote under FOB, CIF or other delivery terms. Sourcing requests and trade-ins are welcome. Secondhand Dealer License [Set Number].": {
    en: "*Listed prices show Japan domestic retail prices with tax. For international export, we quote under FOB, CIF or other delivery terms. Sourcing requests and trade-ins are welcome. Secondhand Dealer License [Set Number].",
    ja: "※表示価格は税込・国内販売価格です。輸出の場合はFOB等の条件で別途お見積りします。掲載外の車両のお探し・買取・下取りもご相談ください。古物商許可【許可番号を記入】"
  },

  // Software Page
  "Tailored digital products,": { en: "Tailored digital products,", ja: "TECHNOLOGY" },
  "built for real-world impact.": { en: "built for real-world impact.", ja: "実業を知る会社の、実践的なIT支援。" },
  "As an active business operating import channels, e-commerce stores, and export logistics, HARITA delivers practical systems and digital solutions designed to work in the field. From development to digital marketing and artificial intelligence automation, we support your business transformation.": {
    en: "As an active business operating import channels, e-commerce stores, and export logistics, HARITA delivers practical systems and digital solutions designed to work in the field. From development to digital marketing and artificial intelligence automation, we support your business transformation.",
    ja: "HARITAは自社で輸入・EC・小売・輸出を運営する事業会社です。だからこそ、机上の空論ではない「現場で使える」システムとデジタル施策をご提案できます。開発から保守、マーケティング、AI活用まで、中小企業のDXをワンストップで支援します。"
  },
  "Solutions": { en: "Solutions", ja: "サービス内容" },
  "Core areas of expertise.": { en: "Core areas of expertise.", ja: "サービス内容" },
  "System Dev & Support": { en: "System Dev & Support", ja: "システム開発・保守" },
  "Custom business software, corporate websites, and e-commerce setups. Reliable maintenance plans that keep your systems secure.": {
    en: "Custom business software, corporate websites, and e-commerce setups. Reliable maintenance plans that keep your systems secure.",
    ja: "業務システム・Webサイト・ECサイトの受託開発と保守運用。小規模な改修から新規構築まで、規模に応じて柔軟に対応します。"
  },
  "Business & Web applications": { en: "Business & Web applications", ja: "業務システム・Webアプリケーション開発" },
  "E-commerce setups & operations": { en: "E-commerce setups & operations", ja: "ECサイト構築・運用支援" },
  "Existing system maintenance & updates": { en: "Existing system maintenance & updates", ja: "既存システムの保守・改修" },
  "Digital Marketing": { en: "Digital Marketing", ja: "デジタルマーケティング" },
  "Operational support for online stores, social campaigns, advertising, and user analytics to grow your digital customer base.": {
    en: "Operational support for online stores, social campaigns, advertising, and user analytics to grow your digital customer base.",
    ja: "自社ECの運営で培ったノウハウをもとに、ECモール運用・SNS活用・広告運用を実践的に支援します。"
  },
  "E-commerce channels (Amazon, Rakuten, etc.)": { en: "E-commerce channels (Amazon, Rakuten, etc.)", ja: "ECモール（Amazon・楽天等）運用改善" },
  "Social media campaigns & contents": { en: "Social media campaigns & contents", ja: "SNSマーケティング・コンテンツ企画" },
  "Analytics & conversion optimization": { en: "Analytics & conversion optimization", ja: "アクセス解析・改善提案" },
  "AI Automations": { en: "AI Automations", ja: "AI業務効率化" },
  "Integrating generative AI systems into daily tasks like customer service, doc prep, and data sorting. Scale your throughput.": {
    en: "Integrating generative AI systems into daily tasks like customer service, doc prep, and data sorting. Scale your throughput.",
    ja: "生成AIをはじめとする最新技術を、日々の業務に落とし込みます。資料作成・問い合わせ対応・データ整理などの自動化で、少人数でも回る仕組みづくりを支援します。"
  },
  "Generative AI integration advising": { en: "Generative AI integration advising", ja: "生成AI導入コンサルティング" },
  "Workflow automation setups": { en: "Workflow automation setups", ja: "業務フローの自動化・効率化" },
  "AI training workshops & team support": { en: "AI training workshops & team support", ja: "AI活用研修・運用定着支援" },
  "Project Flow": { en: "Project Flow", ja: "ご依頼の流れ" },
  "From scoping to system launch.": { en: "From scoping to system launch.", ja: "ご依頼の流れ" },
  "Consultation": { en: "Consultation", ja: "ヒアリング" },
  "We discuss your business challenges and goals. Initial consultation is free.": {
    en: "We discuss your business challenges and goals. Initial consultation is free.",
    ja: "課題・ご要望を丁寧にお伺いします。相談は無料です。"
  },
  "We outline the system configuration, timeline, and estimate cost.": {
    en: "We outline the system configuration, timeline, and estimate cost.",
    ja: "最適な構成と概算費用をご提案します。"
  },
  "Implementation": { en: "Implementation", ja: "開発・実装" },
  "Our team develops the software, keeping you updated at every milestone.": {
    en: "Our team develops the software, keeping you updated at every milestone.",
    ja: "進捗を共有しながら開発を進めます。"
  },
  "Release & Support": { en: "Release & Support", ja: "納品・保守" },
  "Deploy the solution and transition into post-launch support and improvements.": {
    en: "Deploy the solution and transition into post-launch support and improvements.",
    ja: "納品後も保守・改善を継続的にサポートします。"
  },

  // Consulting Page
  "Strategic advisory,": { en: "Strategic advisory,", ja: "CONSULTING" },
  "built on practical experience.": { en: "built on practical experience.", ja: "実業経験と海外ネットワークで、伴走する。" },
  "We don't offer theoretical textbooks. Operating in foods, automotive export, software solutions, and gemstones, our team provides battle-tested strategy and advisory services. From corporate management to personal startup ideas, we walk side-by-side with you.": {
    en: "We don't offer theoretical textbooks. Operating in foods, automotive export, software solutions, and gemstones, our team provides battle-tested strategy and advisory services. From corporate management to personal startup ideas, we walk side-by-side with you.",
    ja: "輸入・EC・小売・輸出・システム開発 ― 自ら5つの事業を営むからこそ語れる、実践に根ざしたコンサルティングを提供します。経営課題から個人の起業相談まで、規模を問わず伴走します。"
  },
  "Service Menu": { en: "Service Menu", ja: "サービスメニュー" },
  "Advisory categories we support.": { en: "Advisory categories we support.", ja: "サービスメニュー" },
  "Corporate Strategy": { en: "Corporate Strategy", ja: "経営コンサルティング" },
  "Business planning, scaling operations, market research, and financial restructuring.": {
    en: "Business planning, scaling operations, market research, and financial restructuring.",
    ja: "事業計画・販路開拓・収益改善など、経営全般の課題解決を支援します。"
  },
  "Brand Advisory": { en: "Brand Advisory", ja: "ブランディング支援" },
  "Defining corporate identity, product conceptualization, and visual guidelines.": {
    en: "Defining corporate identity, product conceptualization, and visual guidelines.",
    ja: "ブランドコンセプト設計から商品開発・デザインディレクションまで支援します。"
  },
  "Global Trade & Networks": { en: "Global Trade & Networks", ja: "輸出入・海外展開" },
  "Import/export consulting, custom clearance advisory, and trade channels with Sri Lanka/South Asia.": {
    en: "Import/export consulting, custom clearance advisory, and trade channels with Sri Lanka/South Asia.",
    ja: "スリランカ・南アジアとのネットワークを活かし、貿易実務と海外展開を支援します。"
  },
  "Personal Startup Support": { en: "Personal Startup Support", ja: "個人向け相談" },
  "Actionable advice for individual founders starting out in e-commerce, imports, or freelance.": {
    en: "Actionable advice for individual founders starting out in e-commerce, imports, or freelance.",
    ja: "起業・副業・EC開業など、個人の挑戦もサポートします。"
  },
  "Advisory Flow": { en: "Advisory Flow", ja: "ご相談の流れ" },
  "How we partner together.": { en: "How we partner together.", ja: "ご相談の流れ" },
  "Form Submission": { en: "Form Submission", ja: "お問い合わせ" },
  "Let us know your current situation and goals via our contact form.": {
    en: "Let us know your current situation and goals via our contact form.",
    ja: "フォームよりご相談内容をお送りください。"
  },
  "Discovery Call": { en: "Discovery Call", ja: "初回ヒアリング" },
  "We arrange an online or in-person session to understand the challenges in depth.": {
    en: "We arrange an online or in-person session to understand the challenges in depth.",
    ja: "オンラインまたは対面で現状と目標をお伺いします。"
  },
  "Engagement Setup": { en: "Engagement Setup", ja: "ご提案・契約" },
  "We propose structured advisory plans, from spot consultation to monthly retainers.": {
    en: "We propose structured advisory plans, from spot consultation to monthly retainers.",
    ja: "スポット相談・顧問契約など最適な形をご提案します。"
  },

  // Gemstones Page
  "Once-in-a-lifetime": { en: "Once-in-a-lifetime", ja: "GEMSTONE" },
  "brilliance from the Island of Gems.": { en: "brilliance from the Island of Gems.", ja: "宝石の島スリランカから、一期一会の輝きを。" },
  "Sri Lanka — 'Ratnadeepa', the Island of Gems — has over 2,000 years of gem history. Through our local network, HARITA directly imports coloured stones including blue sapphires and the rare padparadscha.": {
    en: "Sri Lanka — 'Ratnadeepa', the Island of Gems — has over 2,000 years of gem history. Through our local network, HARITA directly imports coloured stones including blue sapphires and the rare padparadscha.",
    ja: "スリランカは「宝石の島（ラトナディーパ）」と呼ばれ、2000年以上の宝石の歴史を持つ世界有数の産地です。HARITAは現地ネットワークを活かし、ブルーサファイアやパパラチアをはじめとする色石を直輸入。卸売・小売・オーダーメイドに対応します。"
  },
  "Our Gemstones": { en: "Our Gemstones", ja: "取扱宝石" },
  "Fine loose gems & jewelry.": { en: "Fine loose gems & jewelry.", ja: "取扱宝石" },
  "Trust Sourcing": { en: "Trust Sourcing", ja: "安心へのこだわり" },
  "Why Choose HARITA": { en: "Why Choose HARITA", ja: "安心へのこだわり" },
  "We accommodate wholesale trade for retailers, direct private sales, and custom jewellery crafting. Share your desired specifications or budget.": {
    en: "We accommodate wholesale trade for retailers, direct private sales, and custom jewellery crafting. Share your desired specifications or budget.",
    ja: "卸売（業者様向け）・小売・オーダーメイドいずれも対応しています。ご予算・ご希望の石をお聞かせください。"
  },
  "Gem Collection": { en: "Gem Collection", ja: "在庫一覧" },
  "Available inventory.": { en: "Available inventory.", ja: "在庫一覧" },
  "Hover over the gemstone image to view alternative angles. To request dynamic pictures, arrange private viewing, or verify laboratory certifications, select 'Inquire' on the stone.": {
    en: "Hover over the gemstone image to view alternative angles. To request dynamic pictures, arrange private viewing, or verify laboratory certifications, select 'Inquire' on the stone.",
    ja: "現在ご案内できる宝石の一覧です。写真にカーソルを載せると別カットをご覧いただけます。実物のご確認・追加写真をご希望の方は、各石の「問い合わせる」ボタンからご連絡ください。"
  },
  "Inquire about this gem": { en: "Inquire about this gem", ja: "この宝石について問い合わせる" },
  "Weight": { en: "Weight", ja: "重さ" },
  "Size": { en: "Size", ja: "サイズ" },
  "Report": { en: "Report", ja: "鑑別書" },
  "*Listed price includes Japan domestic sales tax. For gemstones currently without identification reports, we can request certifications from major Japanese laboratories on your behalf (additional fees apply). Sourced items are unique, single-stone lots and may sell out.": {
    en: "*Listed price includes Japan domestic sales tax. For gemstones currently without identification reports, we can request certifications from major Japanese laboratories on your behalf (additional fees apply). Sourced items are unique, single-stone lot and may sell out.",
    ja: "※価格は税込です。鑑別書なしの石も、ご希望に応じて国内鑑別機関の鑑別書を取得できます（別途費用）。在庫は一点物のため、売約済となる場合があります。"
  },

  // Missing translation mappings
  "Home": { en: "Home", ja: "ホーム" },
  "Business": { en: "Business", ja: "事業紹介" },
  "News": { en: "News", ja: "ニュース" },
  "Get in Touch": { en: "Get in Touch", ja: "お問い合わせ" },
  
  // Marquee items
  "AUTOMOBILE": { en: "AUTOMOBILE", ja: "中古車・重機事業" },
  "Used Vehicles & Machinery Export": { en: "Used Vehicles & Machinery Export", ja: "中古車両・建設機械の輸出・売買" },
  "SOFTWARE": { en: "SOFTWARE", ja: "ソフトウェア・IT事業" },
  "Development & AI Solutions": { en: "Development & AI Solutions", ja: "システム開発＆AI業務効率化" },
  "CONSULTING": { en: "CONSULTING", ja: "コンサルティング事業" },
  "Business & Branding": { en: "Business & Branding", ja: "経営戦略・ブランディング支援" },
  "GEMSTONE": { en: "GEMSTONE", ja: "宝石事業" },
  "Blue Sapphire & Padparadscha": { en: "Blue Sapphire & Padparadscha", ja: "サファイア・天然石直輸入" },
  "FOOD & TRADING": { en: "FOOD & TRADING", ja: "食品・雑貨事業" },
  "Ceylon Cinnamon & Spices": { en: "Ceylon Cinnamon & Spices", ja: "セイロンシナモン＆厳選スパイス" },

  // Stats

  "Connecting People with HARITA": { en: "Connecting People with HARITA", ja: "人と人を繋ぐ HARITA" },
  "2d": { en: "2d", ja: "2日前" },
  "Menu": { en: "Menu", ja: "メニュー" },
  "Start": { en: "Start", ja: "スタート" },
  "Start your": { en: "Start your", ja: "今すぐ" },
  "journey today": { en: "journey today", ja: "始めましょう" },
  "Support for everyone from companies with management challenges to individuals starting a new venture.": {
    en: "Support for everyone from companies with management challenges to individuals starting a new venture.",
    ja: "経営課題を抱える企業から、新たな一歩を踏み出す個人まで、幅広くサポートします。"
  },
  "Book a Consultation": { en: "Book a Consultation", ja: "相談を予約する" },
  "Business Advisory": { en: "Business Advisory", ja: "ビジネスアドバイザリー" },
  "Guidance built on": { en: "Guidance built on", ja: "実業の経験に裏打ちされた" },
  "real business experience.": { en: "real business experience.", ja: "確かなアドバイス。" },
  "Import, e-commerce, retail, export and software — because we run five businesses ourselves, our consulting is rooted in practice.": {
    en: "Import, e-commerce, retail, export and software — because we run five businesses ourselves, our consulting is rooted in practice.",
    ja: "輸入・EC・小売・輸出・システム開発。自ら5つの事業を営むからこそ語れる、実践的なコンサルティングを提供します。"
  },
  "Product purchases, wholesale, vehicle export, software development, consulting or gemstones — we usually reply within two business days.": {
    en: "Product purchases, wholesale, vehicle export, software development, consulting or gemstones — we usually reply within two business days.",
    ja: "商品のご購入・卸売・中古車・システム開発・コンサルティング・宝石について、通常2営業日以内にご返信いたします。"
  },
  "Message Sent": { en: "Message Sent", ja: "送信完了" },
  "Thank you for reaching out. We will reply within two business days.": {
    en: "Thank you for reaching out. We will reply within two business days.",
    ja: "お問い合わせいただきありがとうございます。2営業日以内にご返信いたします。"
  },
  "Company / Organisation": { en: "Company / Organisation", ja: "会社名・組織名" },
  "Company name (optional)": { en: "Company name (optional)", ja: "会社名（任意）" },
  "Topic *": { en: "Topic *", ja: "お問い合わせ種別 *" },
  "Select a topic...": { en: "Select a topic...", ja: "選択してください..." },
  "Message *": { en: "Message *", ja: "お問い合わせ内容 *" },
  "Please describe your enquiry in as much detail as you can...": {
    en: "Please describe your enquiry in as much detail as you can...",
    ja: "お問い合わせ内容をご記入ください..."
  },
  "Send Message": { en: "Send Message", ja: "送信する" },
  "Languages": { en: "Languages", ja: "言語" },
  "Our": { en: "Our", ja: "私たちの" },
  "Products": { en: "Products", ja: "取扱商品" },
  "Inquire": { en: "Inquire", ja: "お問い合わせ" },
  "Quality & Import": { en: "Quality & Import", ja: "品質と輸入" },
  "Process": { en: "Process", ja: "体制" },
  "Where to": { en: "Where to", ja: "ご購入" },
  "Buy": { en: "Buy", ja: "方法" },
  "Make an Inquiry": { en: "Make an Inquiry", ja: "お問い合わせはこちら" },
  "From Sri Lanka's": { en: "From Sri Lanka's", ja: "スリランカの豊かな" },
  "Nature to Your Table": { en: "Nature to Your Table", ja: "自然を食卓へ" },
  "HARITA imports foods nurtured by Sri Lanka's rich nature, directly from the source. Centred on authentic Ceylon cinnamon, our range includes cloves, curry spices and cinnamon herbal tea.": {
    en: "HARITA imports foods nurtured by Sri Lanka's rich nature, directly from the source. Centred on authentic Ceylon cinnamon, our range includes cloves, curry spices and cinnamon herbal tea.",
    ja: "HARITAは、スリランカの豊かな自然が育んだ食品を現地から直輸入するブランドです。主力のセイロンシナモンをはじめ、クローブ、カレースパイス、シナモンハーブティーなどをお届けします。"
  },
  "Gemstones": { en: "Gemstones", ja: "宝石事業" },
  "Why Choose": { en: "Why Choose", ja: "選ばれる理由" },
  "* We accommodate wholesale trade for retailers, direct private sales, and custom jewellery crafting. Share your desired specifications or budget.": {
    en: "* We accommodate wholesale trade for retailers, direct private sales, and custom jewellery crafting. Share your desired specifications or budget.",
    ja: "※業者様向けの卸売、個人のお客様への販売、オーダーメイドのジュエリー製作に対応しております。ご予算やご希望の石についてお気軽にご相談ください。"
  },
  "Gems in": { en: "Gems in", ja: "在庫" },
  "Stock": { en: "Stock", ja: "ルース一覧" },
  "The Island of Gems": { en: "The Island of Gems", ja: "宝石の島" },
  "Explore": { en: "Explore", ja: "事業内容を見る" },
  "All News": { en: "All News", ja: "すべてのニュース" },
  "Read Article": { en: "Read Article", ja: "記事を読む" },
  "Five Businesses": { en: "Five Businesses", ja: "5つの事業" },
  "From Sri Lanka to Japan and the world — five specialist fields, one unified vision of premium quality and absolute trust.": {
    en: "From Sri Lanka to Japan and the world — five specialist fields, one unified vision of premium quality and absolute trust.",
    ja: "スリランカと日本、そして世界を繋ぐ5つの事業。変わらぬ品質と信頼をお届けします。"
  },
  "Our mission is to deliver products and services of the highest quality. Through HARITA, people feel energised, healed, inspired and encouraged.": {
    en: "Our mission is to deliver products and services of the highest quality. Through HARITA, people feel energised, healed, inspired and encouraged.",
    ja: "最高品質の商品とサービスを提供することが私たちの使命です。HARITAを通じて、人々が元気になり、癒やされ、インスピレーションを受け、励まされることを目指します。"
  },
  "Discover Our Story": { en: "Discover Our Story", ja: "HARITAについて" },
  "View Catalog": { en: "View Catalog", ja: "カタログを見る" },
  "Shop Online": { en: "Shop Online", ja: "オンラインショップ" },
  "Let's build something extraordinary.": { en: "Let's build something extraordinary.", ja: "素晴らしいものを、共に創り上げましょう。" },
  "Wholesale imports, vehicle export, software development, consulting and gemstones. Our specialists are ready to assist you.": {
    en: "Wholesale imports, vehicle export, software development, consulting and gemstones. Our specialists are ready to assist you.",
    ja: "輸入卸・中古車輸出・システム開発・コンサルティング・宝石卸 ― 各事業の専門窓口が対応します。"
  },
  "News &": { en: "News &", ja: "ニュース＆" },
  "Events": { en: "Events", ja: "イベント" },
  "Read More": { en: "Read More", ja: "詳細を見る" },
  "No news in this category yet.": { en: "No news in this category yet.", ja: "このカテゴリのニュースはまだありません。" },
  "Services": { en: "Services", ja: "サービス内容" },
  "Work": { en: "Work", ja: "進め方" },
  "Ready to start your": { en: "Ready to start your", ja: "ビジネスの" },
  "digital transformation?": { en: "digital transformation?", ja: "DXを始めませんか？" },
  "Initial consultation is free. Let's discuss your challenges.": {
    en: "Initial consultation is free. Let's discuss your challenges.",
    ja: "初回相談は無料です。ぜひ課題をお聞かせください。"
  },
  "Free Consultation": { en: "Free Consultation", ja: "無料相談はこちら" },
  "Technology": { en: "Technology", ja: "テクノロジー" },
  "Practical IT from a": { en: "Practical IT from a", ja: "実業を知る会社の、" },
  "company that runs real businesses.": { en: "company that runs real businesses.", ja: "実践的なIT支援。" },
  "HARITA operates its own import, e-commerce, retail and export businesses. That is why we can propose systems and digital strategies that work in the field — not just on paper.": {
    en: "HARITA operates its own import, e-commerce, retail and export businesses. That is why we can propose systems and digital strategies that work in the field — not just on paper.",
    ja: "HARITAは自社で輸入・EC・小売・輸出を運営する事業会社です。だからこそ、現場で本当に使えるシステムをご提案できます。"
  },
  "What We": { en: "What We", ja: "取扱" },
  "Handle": { en: "Handle", ja: "カテゴリー" },
  "Vehicles in": { en: "Vehicles in", ja: "取扱" },
  "Our current stock is listed below with prices, updated regularly. We support both export and domestic sales.": {
    en: "Our current stock is listed below with prices, updated regularly. We support both export and domestic sales.",
    ja: "現在庫車両の一部です。価格・状態は随時更新しています。輸出・国内販売のどちらも対応可能です。"
  },
  "tax incl.": { en: "tax incl.", ja: "（税込）" },
  "* Prices shown are domestic prices including tax. Export prices (FOB/CIF) are quoted separately. Looking for something not listed?": {
    en: "* Prices shown are domestic prices including tax. Export prices (FOB/CIF) are quoted separately. Looking for something not listed?",
    ja: "※表示価格は税込・国内販売価格です。輸出の場合は別途お見積りします。掲載外の車両もお探しします。"
  },
  "Contact us.": { en: "Contact us.", ja: "お問い合わせください。" },
  "Automobile": { en: "Automobile", ja: "自動車" },

  // Automatically added slider, excerpt, and stats translations
  "Our premium Royal Cashew from Sri Lanka is now listed on Rakuten Ichiba. Enjoy rich Ceylon cashews at home.": { en: "Our premium Royal Cashew from Sri Lanka is now listed on Rakuten Ichiba. Enjoy rich Ceylon cashews at home.", ja: "スリランカ産の高級カシューナッツ「Royal Cashew」が楽天市場店に登場。ご自宅で本格的な味をお楽しみいただけます。" },
  "HARITA International has launched a redesigned website to better serve customers and clients worldwide.": { en: "HARITA International has launched a redesigned website to better serve customers and clients worldwide.", ja: "株式会社ハリタ・インターナショナルは、世界中のお客様や取引先企業様へより良いサービスを提供するため、公式サイトをリニューアルしました。" },
  "CEO Ranghe Bandara presented on Ceylon cinnamon trade, quality standards and market potential in Japan.": { en: "CEO Ranghe Bandara presented on Ceylon cinnamon trade, quality standards and market potential in Japan.", ja: "代表取締役のランゲー・バンダーラが、セイロンシナモンの貿易、品質基準、および日本市場における可能性について講演を行いました。" },
  "Our premium Royal Cashew from Sri Lanka is now listed on Rakuten Ichiba.": { en: "Our premium Royal Cashew from Sri Lanka is now listed on Rakuten Ichiba.", ja: "スリランカ産の高級カシューナッツ「Royal Cashew」が楽天市場店に登場。" },
  "HARITA International has launched a redesigned website to better serve customers worldwide.": { en: "HARITA International has launched a redesigned website to better serve customers worldwide.", ja: "世界中のお客様や取引先企業様へより良いサービスを提供するため、公式サイトをリニューアルしました。" },
  "CEO Ranghe Bandara presented on Ceylon cinnamon trade and quality standards.": { en: "CEO Ranghe Bandara presented on Ceylon cinnamon trade and quality standards.", ja: "代表取締役のランゲー・バンダーラが、セイロンシナモンの貿易、品質基準について講演を行いました。" },
  "Connecting People\nwith HARITA": { en: "Connecting People\nwith HARITA", ja: "人と人を繋ぐ HARITA" },
  "Foods, vehicles, software, consulting and gemstones — five businesses connecting Sri Lanka, Japan and the world.": { en: "Foods, vehicles, software, consulting and gemstones — five businesses connecting Sri Lanka, Japan and the world.", ja: "食品・中古車・システム開発・コンサルティング・宝石 ― スリランカと日本、そして世界を繋ぐ5つの事業。" },
  "Premium Spices": { en: "Premium Spices", ja: "極上スパイス" },
  "From Nature\nto Your Table": { en: "From Nature\nto Your Table", ja: "大自然の恵みを食卓へ" },
  "Authentic Ceylon cinnamon, cloves and spices direct from Sri Lanka — wholesale, retail and e-commerce.": { en: "Authentic Ceylon cinnamon, cloves and spices direct from Sri Lanka — wholesale, retail and e-commerce.", ja: "セイロンシナモンを中心に、クローブやカレースパイスなど、本物のスリランカの香りを直輸入。" },
  "Island of Gems": { en: "Island of Gems", ja: "宝石の島" },
  "Once-in-a-Lifetime\nBrilliance": { en: "Once-in-a-Lifetime\nBrilliance", ja: "一期一会の輝き" },
  "Blue sapphires, padparadscha and rare Ceylon gems sourced directly in Sri Lanka — wholesale, retail and custom orders.": { en: "Blue sapphires, padparadscha and rare Ceylon gems sourced directly in Sri Lanka — wholesale, retail and custom orders.", ja: "ブルーサファイアや稀少なパパラチアなど、スリランカ現地の鉱山から最高の一石を直接お届け。" },
  "Connecting People": { en: "Connecting People", ja: "人と人を繋ぐ" },
  "with HARITA": { en: "with HARITA", ja: "HARITA" },
  "Featured Products": { en: "Featured Products", ja: "おすすめ商品" },
  "Our Business": { en: "Our Business", ja: "事業内容を見る" },
  "Contact Us": { en: "Contact Us", ja: "お問い合わせ" },
  "Showcase": { en: "Showcase", ja: "製品紹介" },
  "E-Commerce": { en: "E-Commerce", ja: "オンラインストア" },

  // Automatically added JSX text block translations
  "HARITA": { en: "HARITA", ja: "HARITA" },
  "About": { en: "About", ja: "会社概要" },
  "Philosophy": { en: "Philosophy", ja: "経営理念" },
  "Sri Lanka": { en: "Sri Lanka", ja: "スリランカ" },
  "Message from the": { en: "Message from the", ja: "代表" },
  "CEO": { en: "CEO", ja: "メッセージ" },
  "CEO, HARITA International": { en: "CEO, HARITA International", ja: "代表取締役　ランゲー・バンダーラ" },
  "Company": { en: "Company", ja: "会社" },
  "Profile": { en: "Profile", ja: "概要" },
  "Ready to Connect": { en: "Ready to Connect", ja: "お問い合わせ" },
  "Let's talk about": { en: "Let's talk about", ja: "お気軽に" },
  "your needs.": { en: "your needs.", ja: "ご相談ください" },
  "Our specialists are ready to help in English or Japanese.": { en: "Our specialists are ready to help in English or Japanese.", ja: "専門スタッフが日本語・英語で丁寧に対応いたします。" },
  "Service": { en: "Service", ja: "サービス" },
  "How to": { en: "How to", ja: "ご利用の" },
  "Get in": { en: "Get in", ja: "お問い" },
  "Touch": { en: "Touch", ja: "合わせ" },
  "Contact": { en: "Contact", ja: "お問合せ" },
  "Form": { en: "Form", ja: "フォーム" },
  "Reach Us": { en: "Reach Us", ja: "直接" },
  "Directly": { en: "Directly", ja: "連絡する" },
  "How We": { en: "How We", ja: "開発" },
  "Export": { en: "Export", ja: "輸出" },
  "© 2026 HARITA INTERNATIONAL CO., LTD. All rights reserved.": { en: "© 2026 HARITA INTERNATIONAL CO., LTD. All rights reserved.", ja: "© 2026 HARITA INTERNATIONAL CO., LTD. All rights reserved." },
  "Send another message": { en: "Send another message", ja: "別のお問い合わせを送信する" },
  "Name": { en: "Name", ja: "お名前" },
  "Required": { en: "Required", ja: "必須" },
  "Email Address": { en: "Email Address", ja: "メールアドレス" },
  "Inquiry Topic": { en: "Inquiry Topic", ja: "お問い合わせ種別" },
  "Select a topic": { en: "Select a topic", ja: "トピックを選択してください" },
  "Foods & Spices (purchase / wholesale)": { en: "Foods & Spices (purchase / wholesale)", ja: "食品・スパイス（仕入れ・卸売）" },
  "Used Vehicles & Machinery (export / domestic)": { en: "Used Vehicles & Machinery (export / domestic)", ja: "中古車両・重機（輸出・国内販売）" },
  "Software & AI Solutions (development)": { en: "Software & AI Solutions (development)", ja: "ソフトウェア・IT（開発相談）" },
  "Consulting Services": { en: "Consulting Services", ja: "コンサルティングサービス" },
  "Gemstones & Fine Jewellery": { en: "Gemstones & Fine Jewellery", ja: "宝石・ジュエリー事業" },
  "Other general inquiry": { en: "Other general inquiry", ja: "その他一般のお問い合わせ" },
  "Message Details": { en: "Message Details", ja: "お問い合わせ内容" },

  // Automatically added screenshot matching translation blocks
  "Send a Message": { en: "Send a Message", ja: "メッセージ送信" },
  "Direct Contact": { en: "Direct Contact", ja: "直接お問い合わせ" },
  "Your Name *": { en: "Your Name *", ja: "お名前 *" },
  "Email Address *": { en: "Email Address *", ja: "メールアドレス *" },
  "Telephone": { en: "Telephone", ja: "電話番号" },
  "Email": { en: "Email", ja: "メールアドレス" },
  "Address": { en: "Address", ja: "住所" },
  "HARITA INTERNATIONAL CO., LTD.": { en: "HARITA INTERNATIONAL CO., LTD.", ja: "株式会社ハリタ・インターナショナル" },
  "Ranghe Bandara": { en: "Ranghe Bandara", ja: "ランゲー・バンダーラ" },
  "[Set establishment date]": { en: "[Set establishment date]", ja: "2020年9月" },
  "1723 Ushioku, Enzan, Koshu-shi, Yamanashi 404-0034, Japan": { en: "1723 Ushioku, Enzan, Koshu-shi, Yamanashi 404-0034, Japan", ja: "〒404-0034 山梨県甲州市塩山牛奥1723" },
  "TEL: +81-50-5359-0767 (9:00-17:00 JST)": { en: "TEL: +81-50-5359-0767 (9:00-17:00 JST)", ja: "TEL: +81-50-5359-0767 (9:00〜17:00 土日祝休)" },
  "1. Import and sale of foods and spices\n2. Used vehicles & machinery domestic sale and export\n3. Software development, systems, digital marketing, AI automation\n4. Corporate strategy and branding consulting\n5. Sourcing and sale of gemstones and jewellery": { en: "1. Import and sale of foods and spices\n2. Used vehicles & machinery domestic sale and export\n3. Software development, systems, digital marketing, AI automation\n4. Corporate strategy and branding consulting\n5. Sourcing and sale of gemstones and jewellery", ja: "1. 食品・雑貨・スパイスの輸入および販売\n2. 中古車・重機の国内販売および輸出\n3. システム開発・IT化・デジタルマーケティング・AI導入支援\n4. 経営コンサルティングおよびブランド構築支援\n5. 宝石・ジュエリーの買い付けおよび販売" },
  "Antiques Dealer License: [Set number]\nFood importer notification under Food Sanitation Act": { en: "Antiques Dealer License: [Set number]\nFood importer notification under Food Sanitation Act", ja: "古物商許可証：山梨県公安委員会 第471152000000号\n食品衛生法に基づく食品等輸入届出済" },
  "EC platforms, department stores, wholesalers, international buyers": { en: "EC platforms, department stores, wholesalers, international buyers", ja: "EC事業者、全国百貨店、卸売業者、海外バイヤー・ディーラー" },
  "Organic Life with HARITA": { en: "Organic Life with HARITA", ja: "HARITAのオーガニックライフ" },
  "DIRECT IMPORT": { en: "DIRECT IMPORT", ja: "現地直輸入" },
  "TEA BAG": { en: "TEA BAG", ja: "ティーバッグ" },
  "GIFT": { en: "GIFT", ja: "ギフト用" },
  "Sri Lanka × Japan × world": { en: "Sri Lanka × Japan × world", ja: "スリランカ × 日本 × 世界" },
  "Foods & Trading": { en: "Foods & Trading", ja: "食品・雑貨事業" },
  "Used Vehicles & Machinery": { en: "Used Vehicles & Machinery", ja: "中古車・重機事業" },
  "Software & AI Solutions": { en: "Software & AI Solutions", ja: "ソフトウェア・IT事業" },
  "Consulting": { en: "Consulting", ja: "コンサルティング事業" },
  "Gemstones & Jewellery": { en: "Gemstones & Jewellery", ja: "宝石・ジュエリー事業" },
  "Business Fields": { en: "Business Fields", ja: "事業分野" },
  "Trading Countries": { en: "Trading Countries", ja: "取引国" },
  "Quality Commitment": { en: "Quality Commitment", ja: "品質へのこだわり" },
  "SPICE": { en: "SPICE", ja: "スパイス" },
  "FOOD": { en: "FOOD", ja: "食品" },
  "COMPANY": { en: "COMPANY", ja: "企業情報" },
  "EVENT": { en: "EVENT", ja: "イベント" },

  // Added food page card tags
  "Signature": { en: "Signature", ja: "看板商品" },
  "Aromatic": { en: "Aromatic", ja: "極上の香り" },
  "Wellness": { en: "Wellness", ja: "健康・美容" },
  "Gift": { en: "Gift", ja: "ギフト用" },

  // Automatically added screenshot batch 2 translations
  "First Hearing": { en: "First Hearing", ja: "ヒアリング・初回相談" },
  "Online or in person, we discuss your goals and current situation.": { en: "Online or in person, we discuss your goals and current situation.", ja: "オンラインまたは対面にて、お客様の目標や現在の状況、課題についてお伺いします。" },
  "Proposal": { en: "Proposal", ja: "ご提案" },
  "We propose the best format — one-off consultation or ongoing advisory.": { en: "We propose the best format — one-off consultation or ongoing advisory.", ja: "スポット相談や継続的なアドバイザリー契約など、最適な支援形態をご提案します。" },
  "Send us your topic via the contact form.": { en: "Send us your topic via the contact form.", ja: "お問い合わせフォームより、ご相談内容をお送りください。" },
  "Hearing": { en: "Hearing", ja: "要定義・ヒアリング" },
  "We listen carefully to your challenges. Initial consultation is free.": { en: "We listen carefully to your challenges. Initial consultation is free.", ja: "現在抱えている課題やご要望を丁寧にお伺いします。初回相談は無料です。" },
  "Development": { en: "Development", ja: "開発・実装" },
  "We develop while sharing progress with you.": { en: "We develop while sharing progress with you.", ja: "進捗を都度共有し、フィードバックをいただきながら開発を進めます。" },
  "Delivery & Support": { en: "Delivery & Support", ja: "納品・保守サポート" },
  "Continuous maintenance and improvement after delivery.": { en: "Continuous maintenance and improvement after delivery.", ja: "システム納品後も、安定運用に向けた保守管理や改善のご提案を継続します。" },
  "We propose the best architecture and estimated cost.": { en: "We propose the best architecture and estimated cost.", ja: "ヒアリング内容に基づき、最適なシステム構成案と概算見積もりをご提示します。" },
  "System Development & Maintenance": { en: "System Development & Maintenance", ja: "業務システム開発＆保守管理" },
  "Contract development and maintenance of business systems, websites and e-commerce sites — from small improvements to full builds.": { en: "Contract development and maintenance of business systems, websites and e-commerce sites — from small improvements to full builds.", ja: "業務効率化システム、コーポレートサイト、ECサイトなどの受託開発および保守運用を、小規模な改修からフルビルドまで対応します。" },
  "Business systems and web applications": { en: "Business systems and web applications", ja: "業務管理システム・Webアプリケーション構築" },
  "E-commerce site building and operation": { en: "E-commerce site building and operation", ja: "自社ECサイトの立ち上げ・多店舗連携サポート" },
  "Maintenance and improvement of existing systems": { en: "Maintenance and improvement of existing systems", ja: "既存システムの保守管理・改修・トラブル対応" },
  "Hands-on support for marketplace operations, social media and advertising, based on the know-how of running our own stores.": { en: "Hands-on support for marketplace operations, social media and advertising, based on the know-how of running our own stores.", ja: "自社オンラインショップ運営の実績に基づき、モール運営、SNS運用、広告運用などを総合的にハンズオンで支援します。" },
  "Marketplace optimisation (Amazon, Rakuten, etc.)": { en: "Marketplace optimisation (Amazon, Rakuten, etc.)", ja: "ECモール（Amazon、楽天市場等）の出店・最適化" },
  "Social media marketing and content planning": { en: "Social media marketing and content planning", ja: "SNSアカウントの運用代行・コンテンツ企画" },
  "Analytics and improvement proposals": { en: "Analytics and improvement proposals", ja: "データ分析・動線改善による成約率向上提案" },
  "AI-Driven Efficiency": { en: "AI-Driven Efficiency", ja: "生成AI導入＆業務効率化" },
  "We bring generative AI and other modern technologies into daily operations — automating document work, inquiries and data processing so small teams can do more.": { en: "We bring generative AI and other modern technologies into daily operations — automating document work, inquiries and data processing so small teams can do more.", ja: "生成AIをはじめとする最新テクノロジーを実務に組み込み、書類作成、問い合わせ対応、データ処理等の自動化により、少人数での生産性を最大化します。" },
  "Generative AI adoption consulting": { en: "Generative AI adoption consulting", ja: "ChatGPT等の生成AIツール活用コンサルティング" },
  "Workflow automation": { en: "Workflow automation", ja: "RPA・iPaaSによる社内業務プロセスの自動化" },
  "AI training and adoption support": { en: "AI training and adoption support", ja: "社内メンバー向けAIトレーニング・導入定着支援" },
  "BUSINESS": { en: "BUSINESS", ja: "経営アドバイザリー" },
  "Management Consulting": { en: "Management Consulting", ja: "経営コンサルティング" },
  "Business planning, sales channel development and profitability improvement.": { en: "Business planning, sales channel development and profitability improvement.", ja: "事業計画の策定、販路開拓、業務改善による収益性向上など、経営課題全般をサポートします。" },
  "BRANDING": { en: "BRANDING", ja: "ブランド構築" },
  "Branding": { en: "Branding", ja: "ブランディング支援" },
  "From brand concept design to product development and design direction.": { en: "From brand concept design to product development and design direction.", ja: "ブランドコンセプトの設計から、製品開発、ロゴ・Webデザインなどのクリエイティブディレクションまで行います。" },
  "GLOBAL": { en: "GLOBAL", ja: "グローバル展開" },
  "Trade & Global Expansion": { en: "Trade & Global Expansion", ja: "貿易・海外進出サポート" },
  "Trading practice and expansion support using our Sri Lanka / South Asia network.": { en: "Trading practice and expansion support using our Sri Lanka / South Asia network.", ja: "スリランカを中心とする南アジア地域への進出、貿易実務、現地調査などをトータルに支援します。" },
  "PERSONAL": { en: "PERSONAL", ja: "個人起業支援" },
  "Personal Consulting": { en: "Personal Consulting", ja: "個人向けコンサルティング" },
  "Support for start-ups, side businesses and opening online stores.": { en: "Support for start-ups, side businesses and opening online stores.", ja: "個人の起業、副業のスタート、オンラインショップの開設など、一歩を踏み出す挑戦を伴走支援します。" },
  "Vehicles Stock": { en: "Vehicles Stock", ja: "取扱車両一覧" },
  "AVAILABLE": { en: "AVAILABLE", ja: "販売中" },
  "ON HOLD": { en: "ON HOLD", ja: "商談中" },
  "Year": { en: "Year", ja: "年式" },
  "Mileage": { en: "Mileage", ja: "走行距離" },
  "Spec": { en: "Spec", ja: "スペック" },

  // Automatically added third batch translations
  "Inquiry": { en: "Inquiry", ja: "お問い合わせ" },
  "Tell us the model, conditions and destination you are looking for.": { en: "Tell us the model, conditions and destination you are looking for.", ja: "ご希望の車種、年式、走行距離、ご予算などをお気軽にお知らせください。" },
  "Proposal & Quote": { en: "Proposal & Quote", ja: "ご提案・お見積り" },
  "We propose the best vehicles from auctions and stock, with a quotation.": { en: "We propose the best vehicles from auctions and stock, with a quotation.", ja: "自社在庫や会員制オークションから厳選した車両をご提案し、概算費用をお見積りします。" },
  "Maintenance & Docs": { en: "Maintenance & Docs", ja: "点検整備・書類作成" },
  "Inspection, deregistration for export and shipping documents.": { en: "Inspection, deregistration for export and shipping documents.", ja: "輸出前点検、輸出抹消登録手続き、船積書類の手配を行います。" },
  "Shipping & Delivery": { en: "Shipping & Delivery", ja: "船積み・お届け" },
  "After shipment we send the B/L and related documents to complete delivery.": { en: "After shipment we send the B/L and related documents to complete delivery.", ja: "船積み完了後、船荷証券（B/L）などの必要書類一式を発送し、納車となります。" },
  "Toyota Hiace Van DX (sample)": { en: "Toyota Hiace Van DX (sample)", ja: "トヨタ ハイエースバン DX（サンプル）" },
  "Komatsu Mini Excavator PC30 (sample)": { en: "Komatsu Mini Excavator PC30 (sample)", ja: "コマツ ミニショベル PC30（サンプル）" },
  "Suzuki Every JOIN (sample)": { en: "Suzuki Every JOIN (sample)", ja: "スズキ エブリイ JOIN（サンプル）" },
  "Diesel / AT / 2WD": { en: "Diesel / AT / 2WD", ja: "ディーゼル / AT / 2WD" },
  "2,340 hours / serviced": { en: "2,340 hours / serviced", ja: "稼働2,340時間 / 点検整備済" },
  "Petrol / AT / High roof": { en: "Petrol / AT / High roof", ja: "ガソリン / AT / ハイルーフ" },
  "Blue Sapphire": { en: "Blue Sapphire", ja: "ブルーサファイア" },
  "Sri Lanka's signature gem. Ceylon sapphires, prized for their deep, clear blue, are loved by collectors worldwide. We offer loose stones and finished jewellery for every budget.": { en: "Sri Lanka's signature gem. Ceylon sapphires, prized for their deep, clear blue, are loved by collectors worldwide. We offer loose stones and finished jewellery for every budget.", ja: "スリランカを代表する宝石。深みのある鮮やかな青が特徴で、世界中のコレクターに愛されています。ルース（裸石）からジュエリーへの加工まで対応します。" },
  "Padparadscha Sapphire": { en: "Padparadscha Sapphire", ja: "パパラチアサファイア" },
  "Named after the colour of the lotus flower, this rare sapphire blends pink and orange. One of Sri Lanka's greatest treasures — contact us for availability.": { en: "Named after the colour of the lotus flower, this rare sapphire blends pink and orange. One of Sri Lanka's greatest treasures — contact us for availability.", ja: "「蓮の花」の色に例えられる、ピンクとオレンジが混ざり合った稀少なサファイア。スリランカの至宝の一つです。" },
  "Coloured Stones & Jewellery": { en: "Coloured Stones & Jewellery", ja: "各種天然石＆ジュエリー" },
  "Rubies, cat's eyes, moonstones and more from Sri Lanka, plus jewellery that brings them to life. Custom orders for weddings and anniversaries are welcome.": { en: "Rubies, cat's eyes, moonstones and more from Sri Lanka, plus jewellery that brings them to life. Custom orders for weddings and anniversaries are welcome.", ja: "ルビー、キャッツアイ、ムーンストーンなど多種多様な天然石と、オーダーメイドジュエリーを取り扱っています。記念日のカスタムオーダーも可能です。" },
  "Direct Sourcing": { en: "Direct Sourcing", ja: "現地直接仕入れ" },
  "Rough and loose stones purchased directly with trusted local partners.": { en: "Rough and loose stones purchased directly with trusted local partners.", ja: "スリランカ現地の採掘ルートと強固なコネクションを持ち、原石やルースを直接買い付けています。" },
  "Certification": { en: "Certification", ja: "鑑別書の取得" },
  "Gem identification reports from Japanese laboratories available on request.": { en: "Gem identification reports from Japanese laboratories available on request.", ja: "ご希望に応じて、日本の主要鑑別機関（中央宝石研究所等）による鑑別書を取得いたします。" },
  "Fair Pricing": { en: "Fair Pricing", ja: "適正な価格" },
  "Direct import means fewer middlemen and fair prices for the quality.": { en: "Direct import means fewer middlemen and fair prices for the quality.", ja: "中間マージンをカットした直接取引だからこそ、品質に対して良心的な価格でご提供できます。" },
  "Blue Sapphire (sample)": { en: "Blue Sapphire (sample)", ja: "ブルーサファイア（サンプル）" },
  "Padparadscha Sapphire (sample)": { en: "Padparadscha Sapphire (sample)", ja: "パパラチアサファイア（サンプル）" },
  "Royal Blue Moonstone (sample)": { en: "Royal Blue Moonstone (sample)", ja: "ロイヤルブルームーンストーン（サンプル）" },
  "Gem ID report included": { en: "Gem ID report included", ja: "鑑別書付属" },
  "No report (avail. on request)": { en: "No report (avail. on request)", ja: "鑑別書なし（取得可能）" },
  "Local Sourcing": { en: "Local Sourcing", ja: "現地調達" },
  "Procured directly from trusted producers and partners in Sri Lanka.": { en: "Procured directly from trusted producers and partners in Sri Lanka.", ja: "スリランカの信頼できる生産者やパートナーから直接調達しています。" },
  "Quality Check": { en: "Quality Check", ja: "品質検査" },
  "Only products that meet our aroma and quality standards are imported.": { en: "Only products that meet our aroma and quality standards are imported.", ja: "当社の厳しい品質基準を満たした製品のみを輸入しています。" },
  "Compliant Import": { en: "Compliant Import", ja: "適正な輸入" },
  "Imported and inspected in accordance with Japan's Food Sanitation Act.": { en: "Imported and inspected in accordance with Japan's Food Sanitation Act.", ja: "日本の食品衛生法に基づき、適切な手続き・検査を経て輸入しています。" },
  "Delivery": { en: "Delivery", ja: "お届け" },
  "Delivered to customers through e-commerce, wholesale and retail channels.": { en: "Delivered to customers through e-commerce, wholesale and retail channels.", ja: "EC、卸売、小売チャネルを通じて、迅速にお客様へお届けします。" },

  // Added homepage products and business desc translations
  "Cinnamon Powder": { en: "Cinnamon Powder", ja: "シナモンパウダー" },
  "Spice Gift Sets": { en: "Spice Gift Sets", ja: "スパイスギフトセット" },
  "The queen of spices — true cinnamon sticks from Sri Lanka.": { en: "The queen of spices — true cinnamon sticks from Sri Lanka.", ja: "「スパイスの女王」と呼ばれる、スリランカ産の最高級本シナモン（スティック）。" },
  "An elegant, versatile powder for everyday cooking and drinks.": { en: "An elegant, versatile powder for everyday cooking and drinks.", ja: "お料理や飲み物に手軽に使える、香り高く上品なシナモンパウダー。" },
  "Aromatic Sri Lankan cloves, essential for curry and chai.": { en: "Aromatic Sri Lankan cloves, essential for curry and chai.", ja: "チャイやカレーの風味づけに欠かせない、スリランカ産の香り豊かなクローブ（丸のまま）。" },
  "Popular spice assortments featuring cinnamon and cloves.": { en: "Popular spice assortments featuring cinnamon and cloves.", ja: "人気のシナモンやクローブを詰め合わせた、贈り物に最適なスパイスセット。" },
  "Direct imports of authentic Ceylon cinnamon, cloves, curry spices and cinnamon herbal tea from Sri Lanka — wholesale, retail and e-commerce.": { en: "Direct imports of authentic Ceylon cinnamon, cloves, curry spices and cinnamon herbal tea from Sri Lanka — wholesale, retail and e-commerce.", ja: "スリランカ産セイロンシナモンを中心に、クローブ、カレースパイス、ハーブティーなどの高品質な食品・スパイスを現地から直輸入。卸売・小売・ECで展開しています。" },
  "Passenger cars to heavy machinery: domestic trading and worldwide export. Negotiations available in English.": { en: "Passenger cars to heavy machinery: domestic trading and worldwide export. Negotiations available in English.", ja: "乗用車からトラック、フォークリフト、大型建設機械（バックホー等）まで幅広く取り扱い。国内販売および世界各国への輸出に対応。英語での商談も可能です。" },
  "System development and maintenance, digital marketing and AI-driven business efficiency.": { en: "System development and maintenance, digital marketing and AI-driven business efficiency.", ja: "業務効率化システムやWebサイト・ECサイトの受託開発、保守運用から、デジタルマーケティング、生成AIを活用した業務改善のご提案までトータルにサポートします。" },
  "Hands-on support for management, branding and international expansion, backed by real trading experience.": { en: "Hands-on support for management, branding and international expansion, backed by real trading experience.", ja: "自ら輸出入やシステム開発等の5事業を運営する実務経験に基づき、経営戦略・新規事業立ち上げ・ブランド構築・海外進出をハンズオンで伴走支援します。" },
  "Blue sapphires, padparadscha and other Ceylon gems sourced directly in Sri Lanka. Wholesale, retail and custom orders.": { en: "Blue sapphires, padparadscha and other Ceylon gems sourced directly in Sri Lanka. Wholesale, retail and custom orders.", ja: "ブルーサファイアや稀少石パパラチアなど、スリランカ現地の採掘ルートから最高の一石を直接買い付け。卸売、小売、カスタムジュエリー製作に対応します。" },

  // Added about page company profile and corporate history translations
  "2020": { en: "2020", ja: "2020年" },
  "2026": { en: "2026", ja: "2026年" },
  "Company Name": { en: "Company Name", ja: "会社名" },
  "Representative": { en: "Representative", ja: "代表者" },
  "Established": { en: "Established", ja: "設立" },
  "Location": { en: "Location", ja: "所在地" },
  "Contact Information": { en: "Contact Information", ja: "連絡先" },
  "Business details": { en: "Business details", ja: "事業内容" },
  "License": { en: "License", ja: "古物商許可等" },
  "Major trading partners": { en: "Major trading partners", ja: "主要取引先" },
  "Corporate": { en: "Corporate", ja: "企業" },
  "History": { en: "History", ja: "沿革" },
  "Harita International Co., Ltd.": { en: "Harita International Co., Ltd.", ja: "株式会社ハリタ・インターナショナル" },
  "Representative Director Lange Bandara": { en: "Representative Director Lange Bandara", ja: "代表取締役　ランゲー・バンダーラ" },
  "【Enter the date of establishment】": { en: "【Enter the date of establishment】", ja: "【設立年月を記入】" },
  "〒404-0034 1723 Shioyama Ushioku, Koshu City, Yamanashi Prefecture": { en: "〒404-0034 1723 Shioyama Ushioku, Koshu City, Yamanashi Prefecture", ja: "〒404-0034 山梨県甲州市塩山牛奥1723" },
  "TEL: +81-50-5359-0767 (Business hours 9:00〜17:00)\nFax: +81-55-213-5957\nMail: info@haritainternational.com": { en: "TEL: +81-50-5359-0767 (Business hours 9:00〜17:00)\nFax: +81-55-213-5957\nMail: info@haritainternational.com", ja: "TEL: +81-50-5359-0767（受付時間 9:00〜17:00）\nFax: +81-55-213-5957\nMail: info@haritainternational.com" },
  "1. Import, wholesale and retail sales of food and miscellaneous goods\n2. Buying and selling used cars (including heavy machinery) (domestic and international)\n3. Software/system development and maintenance (including digital marketing and AI business efficiency)\n4. Consulting (corporate, personal, branding)\n5. Import and sale of jewelry and accessories (wholesale and retail)": { en: "1. Import, wholesale and retail sales of food and miscellaneous goods\n2. Buying and selling used cars (including heavy machinery) (domestic and international)\n3. Software/system development and maintenance (including digital marketing and AI business efficiency)\n4. Consulting (corporate, personal, branding)\n5. Import and sale of jewelry and accessories (wholesale and retail)", ja: "1. 食品・雑貨の輸入・卸売・小売販売\n2. 中古車・重機の売買・輸出入（国内・海外）\n3. ソフトウェア・システム開発・保守運用（デジタルマーケティング、生成AI導入支援含む）\n4. 経営コンサルティング・ブランディング支援（企業・個人）\n5. 宝石・ジュエリー・アクセサリーの輸入・販売（卸売・小売）" },
  "Secondhand goods business license 【Enter the license number 】\nImporter notification under the Food Sanitation Act": { en: "Secondhand goods business license 【Enter the license number 】\nImporter notification under the Food Sanitation Act", ja: "古物商許可証 【番号を記入】\n食品衛生法に基づく食品等輸入届出済" },
  "Domestic e-commerce companies, major department stores, wholesalers, overseas buyers, etc": { en: "Domestic e-commerce companies, major department stores, wholesalers, overseas buyers, etc", ja: "国内主要EC事業者、百貨店、卸売業者、海外ディーラー・バイヤー等" },
  "【Enter the year and month】": { en: "【Enter the year and month】", ja: "【年月を記入】" },
  "Harita International Co., Ltd. established": { en: "Harita International Co., Ltd. established", ja: "株式会社ハリタ・インターナショナル設立" },
  "Started importing and selling Sri Lankan food products": { en: "Started importing and selling Sri Lankan food products", ja: "スリランカ産食品の輸入・販売を開始" },
  "Online sales begin in earnest (Amazon, Rakuten Ichiba, Official EC)": { en: "Online sales begin in earnest (Amazon, Rakuten Ichiba, Official EC)", ja: "オンライン販売を本格化（Amazon・楽天市場・公式EC）" },
  "Started handling at major department stores": { en: "Started handling at major department stores", ja: "大手百貨店での取り扱い開始" },
  "Started buying and selling used cars and heavy machinery, importing and selling jewelry, and developing systems": { en: "Started buying and selling used cars and heavy machinery, importing and selling jewelry, and developing systems", ja: "中古車・重機の売買、宝石輸入販売、システム開発事業を開始" },
  "Corporate website completely renovated": { en: "Corporate website completely renovated", ja: "コーポレートサイトを全面リニューアル" },

  // Added philosophy locations translations
  "Japan": { en: "Japan", ja: "日本" },
  "Kyoto": { en: "Kyoto", ja: "京都" },
  "Sigiriya": { en: "Sigiriya", ja: "シギリヤ" },
  "ALL": { en: "ALL", ja: "すべて" },
  "Quality": { en: "Quality", ja: "品質" },
  "Online Store": { en: "Online Store", ja: "オンラインストア" },
  "Line Up": { en: "Line Up", ja: "ラインナップ" },
  "Collection": { en: "Collection", ja: "コレクション" },
  "Trust": { en: "Trust", ja: "信頼" },
  "We reply within 2 business days": { en: "We reply within 2 business days", ja: "通常2営業日以内にご返信いたします" },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("harita_lang");
    return (saved === "ja" || saved === "en") ? saved : "ja";
  });

  const setLanguage = (lang: Language) => {
    setLangState(lang);
    localStorage.setItem("harita_lang", lang);
  };

  const t = (key: string): string => {
    const cleanKey = key.trim();
    if (translations[cleanKey] && translations[cleanKey][language]) {
      return translations[cleanKey][language];
    }
    
    // Fallback if Japanese translations not specified, we can try to map some sub-terms,
    // but returning the key is safe.
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
