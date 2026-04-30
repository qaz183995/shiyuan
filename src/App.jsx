import { useState, useEffect } from 'react';
import { FaCheckCircle, FaLeaf, FaHandsHelping, FaPhoneAlt, FaComments, FaClock, FaSprayCan, FaShieldAlt, FaShoePrints, FaCamera, FaWater, FaHandHoldingUsd, FaSnowflake, FaUsers } from 'react-icons/fa';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">石原研洗</div>
        <ul className="nav-links">
          <li><a href="#about">品牌故事</a></li>
          <li><a href="#artisan">職人工法</a></li>
          <li><a href="#social">社會責任</a></li>
          <li><a href="#culture">企業文化</a></li>
        </ul>
        <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>預約服務</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <img src={`${import.meta.env.BASE_URL}hero_section.png`} alt="Hero Background" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">深呼吸，<br/>源自每一次的<span>講究</span></h1>
            <p className="hero-subtitle">專業洗滌，還原空氣的純粹。以大地色彩的溫潤與信賴，為您打造極致潔淨的居家呼吸體驗。</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#contact" className="btn btn-primary">立即預約清洗</a>
              <a href="#artisan" className="btn btn-outline">了解職人工法</a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="container">
        <h2 className="section-title">品牌故事 ｜ 寧願慢一點，也要洗得好一點</h2>
        <div className="story-grid">
          <div className="story-image">
            <img src={`${import.meta.env.BASE_URL}team_culture.png`} alt="Brand Story" />
          </div>
          <div className="story-text">
            <p>在踏入清洗行業的初期，我們從平台接案做起，累積了無數實戰經驗。</p>
            <p>然而，我們也看見了市場的隱憂。在激烈的競爭下，許多同業為了衝刺「翻單率」與接單量，不斷壓縮施工時間，逐漸犧牲了應有的服務細節。</p>
            <p>長期下來，這對花了錢卻得不到相對品質的客戶來說，極不公平。</p>
            <p>這正是「石原研洗」誕生的契機。我們決定打破業界求快的迷思，建立一個讓技師能在合理報酬下，安心且專注於每一道工序的環境。我們相信，唯有放慢腳步、專注細節，每一次的服務才能真正對得起客戶的信任。</p>
            <a href="#culture" className="btn btn-outline" style={{ marginTop: '1rem' }}>認識我們的團隊</a>
          </div>
        </div>
      </section>

      {/* Artisan Craftsmanship */}
      <section id="artisan" className="artisan-section">
        <div className="container">
          <h2 className="section-title">職人工法 ｜ 每一道程序，都是為了讓您安心</h2>
          <p className="section-subtitle">清洗冷氣不該只是把灰塵沖掉就好，我們更在乎施工過程中有沒有把客人的家照顧好。以下是「石原研洗」技師出班時，一定會落實的 6 項標準動作：</p>
          <div className="steps-container">
            <div className="step-card">
              <span className="step-number">1</span>
              <div className="step-icon"><FaShoePrints /></div>
              <h4>自備專屬室內拖鞋</h4>
              <p>尊重您的家，從進門的第一步開始。我們的技師一律自備工作用的乾淨拖鞋，絕不共用客人家中的任何物品，保持最基本的衛生與禮貌。</p>
            </div>
            <div className="step-card">
              <span className="step-number">2</span>
              <div className="step-icon"><FaShieldAlt /></div>
              <h4>確實的地板與傢俱防護</h4>
              <p>我們會在施工動線上鋪設防護地墊，並用養生膠帶把冷氣周遭的牆面、傢俱仔細包覆。拆卸下來的冷氣零件也一律放在專用地墊上，絕不讓水滴或髒污弄髒您的地板。</p>
            </div>
            <div className="step-card">
              <span className="step-number">3</span>
              <div className="step-icon"><FaCamera /></div>
              <h4>施工前後拍照確認</h4>
              <p>借用您的浴室、洗手台清洗零件時，我們會在動工前與完工後拍照紀錄。確保離開時場地已經復原得乾乾淨淨，沒有留下髒污或造成周邊插座、排水孔的損壞，避免任何爭議，讓雙方都安心。</p>
            </div>
            <div className="step-card">
              <span className="step-number">4</span>
              <div className="step-icon"><FaWater /></div>
              <h4>機板雙層防水保護</h4>
              <p>冷氣清洗最怕進水短路。在沖水前，我們會確實使用「雙層浴帽」將電路板嚴密包覆起來，確實阻擋高壓水氣與噴濺，避免洗完發生受潮故障。</p>
            </div>
            <div className="step-card">
              <span className="step-number">5</span>
              <div className="step-icon"><FaSprayCan /></div>
              <h4>依材質選用專用洗劑</h4>
              <p>我們不拿一桶強效藥水從頭洗到尾。針對脆弱的蒸發器鋁鰭片與外殼塑膠件，我們會分開使用對應的專門洗劑。在洗淨霉斑的同時，保護冷氣原廠的防鏽塗層與塑膠材質不被侵蝕老化。</p>
            </div>
            <div className="step-card">
              <span className="step-number">6</span>
              <div className="step-icon"><FaCheckCircle /></div>
              <h4>試紙檢測，確保洗劑零殘留</h4>
              <p>就算大量清水沖得再乾淨，我們還是會多做一步。完工前，我們會用酸鹼試紙實際測試蒸發器，確認完全沒有任何洗劑殘留，保證冷氣吹出來的每一口風，對家人和小孩都是絕對安全的。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section id="social" className="social-section">
        <div className="container">
          <h2 className="section-title">社會責任 ｜ 石原用心，傳愛齊心</h2>
          <p className="section-subtitle">我們始終秉持「取之於社會，用之於社會」的理念，將公益融入每一次的日常服務中。</p>
          <p className="social-chain-label">善的循環，從每一次清洗開始</p>
          <div className="flow-grid">
            <div className="flow-item">
              <div className="flow-icon"><FaHandHoldingUsd /></div>
              <h3>100元/台</h3>
              <p>每次服務提撥至<br/>品牌專屬公益基金</p>
            </div>
            <div className="flow-arrow" aria-hidden="true">→</div>
            <div className="flow-item">
              <div className="flow-icon"><FaSnowflake /></div>
              <h3>每18台</h3>
              <p>累積轉化為一次<br/>免費專業清洗服務</p>
            </div>
            <div className="flow-arrow" aria-hidden="true">→</div>
            <div className="flow-item">
              <div className="flow-icon"><FaUsers /></div>
              <h3>在地里長</h3>
              <p>深度合作，精準<br/>媒合弱勢家庭</p>
            </div>
          </div>
          <p className="social-closing">讓每一次的除舊佈新，不只清新了家裡的空氣，也溫暖了社會的角落。</p>
        </div>
      </section>

      {/* Corporate Culture */}
      <section id="culture" className="container">
        <div className="culture-grid">
          <div className="culture-text">
            <h2 className="section-title">企業文化<br />品牌屬於大家，共創永續價值</h2>
            <div className="culture-features">
              <div className="culture-feature">
                <div className="culture-icon"><FaHandsHelping /></div>
                <div>
                  <h4>善待夥伴 ｜ 回歸初心</h4>
                  <p>我們深知，優秀的技師是品牌的核心。透過扁平、尊重的團隊合作模式，讓每位技術夥伴都能在健康的環境中發揮所長，從根本鞏固服務品質。</p>
                </div>
              </div>
              <div className="culture-feature">
                <div className="culture-icon"><FaCheckCircle /></div>
                <div>
                  <h4>技術行善 ｜ 善意延續</h4>
                  <p>將專業技能轉化為回饋社會的力量，讓企業發展與公益關懷並行。</p>
                </div>
              </div>
              <div className="culture-feature">
                <div className="culture-icon"><FaLeaf /></div>
                <div>
                  <h4>守護設備 ｜ 永續環保</h4>
                  <p>用心服務每一位客戶，透過深層的潔淨保養，有效降低電器耗能並延長設備使用壽命，實踐對環境的保護。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="culture-image">
            <img src={`${import.meta.env.BASE_URL}artisan_cleanup.png`} alt="Corporate Culture" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-logo">石原研洗</div>
          <div className="footer-contact">
            <div className="contact-item">
              <FaPhoneAlt /> 0800-***-***
            </div>
            <div className="contact-item">
              <FaComments /> LINE ID: @********
            </div>
            <div className="contact-item">
              <FaClock /> 營業時間: 09:00 - 18:00 (週一至週六)
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} 石原研洗. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
