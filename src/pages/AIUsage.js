import React from 'react';
import { motion } from 'framer-motion';
import './AIUsage.css';

function AIUsage() {
  return (
    <div className="ai-usage-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI USAGE
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          </motion.p>
        </div>
      </section>

      <div className="container">

        {/* ChatGPT Card */}
        <section className="content-section">
          <motion.div
            className="tool-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="tool-header chatgpt">
              <h3>ChatGPT (OpenAI)</h3>
              <span className="tool-badge">Trợ lý Nghiên cứu & Viết</span>
            </div>
            <div className="tool-content">
              <h4>Công dụng chính:</h4>
              <ul>
                <li>
                  <strong>Nghiên cứu và Tổng quan Tài liệu:</strong> ChatGPT được sử dụng 
                  để thu thập thông tin nền về kinh tế chính trị Mác-Lênin, chủ nghĩa tư 
                  bản độc quyền, và các ví dụ lịch sử về độc quyền dầu mỏ cũng như độc 
                  quyền dữ liệu đương đại.
                </li>
                <li>
                  <strong>Cấu trúc Nội dung:</strong> AI hỗ trợ tổ chức các ý tưởng phức 
                  tạp thành các phần mạch lạc, đảm bảo luồng logic và sự rõ ràng học thuật.
                </li>
                <li>
                  <strong>Tinh chỉnh Ngôn ngữ:</strong> ChatGPT được sử dụng để cải thiện 
                  cấu trúc câu, độ rõ ràng và giọng văn học thuật.
                </li>
                <li>
                  <strong>Kiểm tra Sự thật:</strong> Các ngày tháng lịch sử, tên công ty 
                  và khái niệm kinh tế được xác minh bằng cơ sở kiến thức của ChatGPT.
                </li>
              </ul>
              
            </div>
          </motion.div>
        </section>

        {/* Claude Card */}
        <section className="content-section">
          <motion.div
            className="tool-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="tool-header claude">
              <h3>Claude Sonnet (Anthropic)</h3>
              <span className="tool-badge">Phân tích Sâu & Triển khai Kỹ thuật</span>
            </div>
            <div className="tool-content">
              <h4>Công dụng chính:</h4>
              <ul>
                <li>
                  <strong>Phân tích Phức tạp:</strong> Claude Sonnet được sử dụng cho phân 
                  tích chuyên sâu về năm đặc điểm của chủ nghĩa tư bản độc quyền.
                </li>
                <li>
                  <strong>Phát triển Full-Stack:</strong> Claude tạo ra toàn bộ mã nguồn 
                  React cho trang web này, bao gồm kiến trúc component và logic định tuyến.
                </li>
                <li>
                  <strong>Thiết kế UI:</strong> CSS tùy chỉnh được viết để tạo ra bài trình 
                  bày học thuật sạch sẽ và chuyên nghiệp.
                </li>
                <li>
                  <strong>Tích hợp Nội dung:</strong> Claude dịch nội dung học thuật thành 
                  các component HTML/JSX có cấu trúc.
                </li>
              </ul>
              
              
            </div>
          </motion.div>
        </section>

        {/* GitHub Copilot Card */}
        <section className="content-section">
          <motion.div
            className="tool-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="tool-header copilot">
              <h3>GitHub Copilot (Microsoft/OpenAI)</h3>
              <span className="tool-badge">Hỗ trợ Code & Gỡ lỗi</span>
            </div>
            <div className="tool-content">
              <h4>Công dụng chính:</h4>
              <ul>
                <li>
                  <strong>Tự động hoàn thành Code:</strong> GitHub Copilot cung cấp các 
                  gợi ý code theo thời gian thực trong quá trình phát triển.
                </li>
                <li>
                  <strong>Tạo Boilerplate:</strong> Các mẫu code lặp đi lặp lại được tạo 
                  một phần bởi Copilot, giảm thời gian và lỗi tiềm ẩn.
                </li>
                <li>
                  <strong>Hỗ trợ Gỡ lỗi:</strong> Copilot đưa ra các gợi ý sửa lỗi và 
                  triển khai thay thế một cách hiệu quả.
                </li>
                <li>
                  <strong>Thực hành Tốt nhất:</strong> Copilot đề xuất các mẫu React 
                  hiện đại và cú pháp JavaScript.
                </li>
              </ul>
              
           
            </div>
          </motion.div>
        </section>

        {/* Gemini Card */}
        <section className="content-section">
          <motion.div
            className="tool-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="tool-header gemini">
              <h3>Gemini (Google)</h3>
              <span className="tool-badge">Tạo hình ảnh & Hỗ trợ Sáng tạo</span>
            </div>
            <div className="tool-content">
              <h4>Công dụng chính:</h4>
              <ul>
                <li>
                  <strong>Tạo hình ảnh minh họa:</strong> Gemini được sử dụng để tạo 
                  các hình ảnh minh họa cho website, bao gồm hình nền hero section và 
                  các hình ảnh biểu tượng về độc quyền dầu mỏ và độc quyền dữ liệu.
                </li>
                <li>
                  <strong>Thiết kế Visual:</strong> Hỗ trợ tạo ra các yếu tố hình ảnh 
                  phù hợp với chủ đề học thuật và phong cách thiết kế hiện đại.
                </li>
                <li>
                  <strong>Tối ưu hóa Nội dung Visual:</strong> Đề xuất cách sắp xếp và 
                  trình bày hình ảnh để tăng tính trực quan và thu hút.
                </li>
                <li>
                  <strong>Hỗ trợ Đa phương thức:</strong> Kết hợp giữa xử lý văn bản 
                  và hình ảnh để tạo ra trải nghiệm người dùng toàn diện.
                </li>
              </ul>
              
            </div>
          </motion.div>
        </section>

       

        
      </div>
    </div>
  );
}

export default AIUsage;
