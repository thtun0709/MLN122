import React, { useState, useEffect } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import oilImg from "../images/daumo.jpg";
import dataImg from "../images/dulieu.jpg";
import heroImg from "../images/hero1.jpg";

function Home() {
    const [currentSection, setCurrentSection] = useState(0);
    const sections = ['hero', 'definition', 'comparison', 'analysis', 'financial', 'limits'];

    // Track current section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((sectionId, index) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setCurrentSection(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to scroll to next section
    const scrollToNextSection = () => {
        const nextIndex = currentSection + 1;
        if (nextIndex < sections.length) {
            const element = document.getElementById(sections[nextIndex]);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    // Function to scroll to previous section
    const scrollToPrevSection = () => {
        const prevIndex = currentSection - 1;
        if (prevIndex >= 0) {
            const element = document.getElementById(sections[prevIndex]);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <div className="home-page">
            {/* ================= HERO ================= */}
            <section
                className="hero-section"
                id="hero"
                style={{
                    backgroundImage: `
      linear-gradient(
        rgba(0, 0, 0, 0.35),
        rgba(0, 0, 0, 0.55)
      ),
      url(${heroImg})
    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed"
                }}
            >
                <div className="container text-center">
                    <motion.h1
                        className="main-title"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Từ độc quyền dầu mỏ đến độc quyền dữ liệu
                    </motion.h1>

                    <motion.h2
                        className="subtitle"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        Giới hạn lịch sử của chủ nghĩa tư bản hiện đại
                    </motion.h2>

                    <motion.p
                        className="introduction"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.4 }}
                    >
                        Nếu thế kỷ XX chứng kiến sự thống trị của các “ông trùm dầu mỏ” như
                        Rockefeller, thì thế kỷ XXI là kỷ nguyên của những “đế chế dữ liệu”
                        như Google, Meta, Amazon. Dưới lăng kính Kinh tế Chính trị Mác – Lênin
                        và quan điểm phát triển của Michael Todaro, bài viết phân tích những
                        biểu hiện mới của độc quyền trong thời đại số để làm rõ giới hạn lịch
                        sử tất yếu của chủ nghĩa tư bản.
                    </motion.p>

                    {/* Scroll hint */}
                    <motion.div
                        className="hero-scroll-hint"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 12, 0] }}
                        transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
                        onClick={() =>
                            document
                                .getElementById("definition")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        ↓
                    </motion.div>
                </div>
            </section>


            {/* ================= DEFINITION ================= */}
            <section className="content-section dark-section" id="definition">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Đặt vấn đề lý luận
                    </motion.h2>

                    <div className="row">
                        <div className="col-md-6">
                            <motion.div
                                className="theory-card"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="theory-icon">📚</div>
                                <h3>Độc quyền trong Lý thuyết Kinh tế</h3>
                                <p>
                                    Theo V.I. Lenin trong <em>"Chủ nghĩa đế quốc là giai đoạn cao nhất của chủ nghĩa tư bản"</em>, 
                                    <strong>độc quyền</strong> là hình thức tổ chức kinh tế đặc trưng của chủ nghĩa tư bản giai đoạn đế quốc. 
                                    Các tập đoàn độc quyền thống trị sản xuất, phân phối, thị trường và thu lợi nhuận siêu ngạch.
                                </p>
                            </motion.div>
                        </div>
                        
                        <div className="col-md-6">
                            <motion.div
                                className="theory-card"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="theory-icon">🌐</div>
                                <h3>Độc quyền Thời đại Số</h3>
                                <p>
                                    Trong kỷ nguyên công nghệ 4.0, độc quyền không còn chỉ là kiểm soát tài nguyên vật chất. 
                                    <strong>Big Tech</strong> (Google, Meta, Amazon, Apple) tạo nên <em>"độc quyền dữ liệu"</em> - 
                                    kiểm soát dữ liệu người dùng, thuật toán AI, nền tảng số và hạ tầng đám mây toàn cầu.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        className="definition-box"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4>Vấn đề nghiên cứu</h4>
                        <p>
                            Bài viết phân tích sự biến đổi của độc quyền từ <strong>dầu mỏ</strong> (thế kỷ XX) 
                            sang <strong>dữ liệu</strong> (thế kỷ XXI), làm rõ bản chất giai cấp, mâu thuẫn cơ bản 
                            và giới hạn lịch sử của chủ nghĩa tư bản độc quyền trong thời đại số hóa toàn cầu.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ================= COMPARISON ================= */}
            <section className="content-section comparison-section" id="comparison">
                <div className="container">
                    <motion.h2
                        className="section-title text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        So sánh hai thời kỳ độc quyền
                    </motion.h2>

                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <motion.div
                                className="comparison-card image-card"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="image-wrapper">
                                    <img src={oilImg} alt="Độc quyền dầu mỏ" />
                                    <div className="image-overlay">Thế kỷ XX</div>
                                </div>
                                <h4>Độc quyền dầu mỏ</h4>
                                <ul>
                                    <li>Tài nguyên hữu hạn</li>
                                    <li>Hạ tầng vật chất nặng</li>
                                    <li>Gắn với chiến tranh và địa chính trị</li>
                                    <li>Kiểm soát lãnh thổ và nguồn cung</li>
                                </ul>
                            </motion.div>
                        </div>

                        <div className="col-md-6 mb-4">
                            <motion.div
                                className="comparison-card image-card"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="image-wrapper">
                                    <img src={dataImg} alt="Độc quyền dữ liệu" />
                                    <div className="image-overlay">Thế kỷ XXI</div>
                                </div>
                                <h4>Độc quyền dữ liệu</h4>
                                <ul>
                                    <li>Dữ liệu gần như vô hạn</li>
                                    <li>Nền tảng số & thuật toán</li>
                                    <li>Kiểm soát thông tin và hành vi</li>
                                    <li>Chi phối ý thức xã hội</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ANALYSIS ================= */}
            <section className="content-section" id="analysis">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Biểu hiện mới của độc quyền tư bản hiện đại
                    </motion.h2>

                    <motion.div
                        className="definition-box"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p>
                            Các hình thức <strong>Concern</strong> và{" "}
                            <strong>Conglomerate</strong> trở thành mô hình tổ chức chủ yếu
                            của các tập đoàn công nghệ. Amazon là một Concern đa ngành, còn
                            Alphabet là Conglomerate kết nối các lĩnh vực không liên hệ trực
                            tiếp về kỹ thuật nhưng thống nhất bởi dòng vốn tài chính.
                        </p>
                    </motion.div>

                    <motion.div
                        className="era-box data-era"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p>
                            Doanh nghiệp vừa và nhỏ, lập trình viên, người bán hàng online,
                            YouTubers tuy có vẻ độc lập nhưng thực chất là các "vệ tinh" phụ
                            thuộc vào thuật toán và chính sách của Big Tech.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ================= FINANCIAL CAPITAL ================= */}
            <section className="content-section dark-section" id="financial">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Vai trò mới của tư bản tài chính
                    </motion.h2>

                    <div className="row mb-5">
                        <div className="col-md-4">
                            <motion.div
                                className="financial-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="financial-icon">💰</div>
                                <h4>Ngân hàng Bóng đêm</h4>
                                <p>
                                    Apple nắm giữ <strong>$162 tỷ USD tiền mặt</strong> (2023), 
                                    vượt dự trữ ngoại hối của nhiều quốc gia. Big Tech trở thành 
                                    "ngân hàng không phép" với quy mô tài chính khổng lồ.
                                </p>
                            </motion.div>
                        </div>
                        
                        <div className="col-md-4">
                            <motion.div
                                className="financial-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <div className="financial-icon">📊</div>
                                <h4>Cổ phiếu Đa tầng</h4>
                                <p>
                                    Cơ chế <strong>Dual-class stock</strong> cho phép nhà sáng lập 
                                    giữ quyền bỏ phiếu vượt trội. Mark Zuckerberg chỉ sở hữu 13% cổ phiếu 
                                    nhưng kiểm soát 58% quyền biểu quyết tại Meta.
                                </p>
                            </motion.div>
                        </div>
                        
                        <div className="col-md-4">
                            <motion.div
                                className="financial-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="financial-icon">🏦</div>
                                <h4>Tích hợp Tài chính</h4>
                                <p>
                                    Google Pay, Apple Pay, Amazon Pay thâm nhập thanh toán số. 
                                    <strong>Tư bản công nghiệp và tư bản tài chính</strong> hợp nhất, 
                                    tạo siêu độc quyền kiểm soát cả dữ liệu lẫn dòng tiền.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        className="definition-box"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4>Đặc điểm Tư bản Tài chính Số</h4>
                        <p>
                            Khác với tư bản tài chính truyền thống (ngân hàng, bảo hiểm), tư bản tài chính số 
                            <strong>tích hợp dữ liệu, công nghệ và quyền lực tài chính</strong>. Các tập đoàn Big Tech 
                            không chỉ cho vay, đầu tư mà còn kiểm soát hành vi tiêu dùng thông qua thuật toán AI và dữ liệu người dùng.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ================= LIMITS ================= */}
            <section className="content-section" id="limits">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Giới hạn lịch sử của chủ nghĩa tư bản độc quyền số
                    </motion.h2>

                    <motion.div
                        className="contradiction-box"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Mâu thuẫn Cơ bản</h3>
                        <p>
                            <strong>Lực lượng sản xuất</strong> (công nghệ AI, dữ liệu, mạng xã hội) 
                            <span className="highlight">mang tính xã hội hóa cao độ</span>, được tạo ra bởi hàng tỷ người dùng. 
                            Nhưng <strong>quan hệ sản xuất</strong> vẫn dựa trên 
                            <span className="highlight-red">chiếm hữu tư nhân</span> bởi một nhóm nhỏ tư bản độc quyền.
                        </p>
                    </motion.div>

                    <div className="row mt-5">
                        <div className="col-md-6">
                            <motion.div
                                className="limit-card"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="limit-number">01</div>
                                <h4>🔒 Xâm phạm Quyền riêng tư</h4>
                                <p>
                                    <strong>Cambridge Analytica scandal</strong> (2018): Dữ liệu của 87 triệu 
                                    người dùng Facebook bị khai thác để thao túng bầu cử. Độc quyền dữ liệu 
                                    biến công dân thành "sản phẩm" của Big Tech.
                                </p>
                            </motion.div>
                        </div>
                        
                        <div className="col-md-6">
                            <motion.div
                                className="limit-card"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="limit-number">02</div>
                                <h4>🧠 Thao túng Hành vi Xã hội</h4>
                                <p>
                                    Thuật toán <strong>recommendation</strong> (YouTube, TikTok) tạo "filter bubble", 
                                    phân cực xã hội, lan truyền tin giả. Độc quyền nền tảng kiểm soát 
                                    <em>"không gian công cộng số"</em>.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <motion.div
                                className="limit-card"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <div className="limit-number">03</div>
                                <h4>⚖️ Bất bình đẳng Công nghệ</h4>
                                <p>
                                    <strong>Digital divide</strong>: Khoảng cách giữa các quốc gia phát triển và 
                                    đang phát triển. Big Tech của Mỹ-Trung thống trị toàn cầu, các nước khác 
                                    trở thành "thuộc địa dữ liệu".
                                </p>
                            </motion.div>
                        </div>
                        
                        <div className="col-md-6">
                            <motion.div
                                className="limit-card"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <div className="limit-number">04</div>
                                <h4>🤖 Thất nghiệp do Tự động hóa</h4>
                                <p>
                                    AI và robot thay thế lao động con người. <strong>McKinsey (2023)</strong> 
                                    dự báo 800 triệu việc làm biến mất vào 2030. Lợi nhuận từ tự động hóa 
                                    thuộc về tư bản độc quyền, giai cấp công nhân chịu thiệt.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        className="conclusion-box"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h4>📌 Kết luận</h4>
                        <p>
                            Độc quyền dữ liệu là <strong>hình thức cao nhất và cuối cùng</strong> của chủ nghĩa tư bản độc quyền. 
                            Những mâu thuẫn ngày càng sâu sắc chứng tỏ <em>"chủ nghĩa tư bản đã hết khả năng lãnh đạo xã hội loài người"</em>. 
                            Tương lai thuộc về chế độ xã hội mới, nơi dữ liệu và công nghệ phục vụ lợi ích chung, không phải lợi nhuận của thiểu số.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Fixed Navigation Arrows - Bottom Left */}
            <div className="fixed-nav-arrows">
                {/* Arrow Up - Previous Section */}
                {currentSection > 0 && (
                    <motion.div
                        className="fixed-nav-arrow arrow-up"
                        onClick={scrollToPrevSection}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, -8, 0] }}
                        transition={{
                            opacity: { duration: 0.5 },
                            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                        }}
                        whileHover={{ scale: 1.2 }}
                    >
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="11" fill="#2a5298" opacity="0.9" />
                            <path d="M12 16V8M12 8L8 12M12 8L16 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>
                )}

                {/* Arrow Down - Next Section */}
                {currentSection < sections.length - 1 && (
                    <motion.div
                        className="fixed-nav-arrow arrow-down"
                        onClick={scrollToNextSection}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{
                            opacity: { duration: 0.5 },
                            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                        }}
                        whileHover={{ scale: 1.2 }}
                    >
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="11" fill="#2a5298" opacity="0.9" />
                            <path d="M12 8V16M12 16L8 12M12 16L16 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default Home;
