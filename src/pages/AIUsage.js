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
            Công bố sử dụng công cụ AI
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tính minh bạch học thuật trong việc sử dụng các công cụ trí tuệ nhân tạo
          </motion.p>
        </div>
      </section>

      <div className="container">
        {/* Introduction */}
        <section className="content-section">
          <motion.div
            className="definition-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Tuyên bố về hỗ trợ AI</h2>
            <p>
              Theo tiêu chuẩn trung thực học thuật và thực hành nghiên cứu có đạo đức, 
              tài liệu này cung cấp bản công bố toàn diện về cách các công cụ trí tuệ 
              nhân tạo được sử dụng trong việc chuẩn bị phân tích học thuật này. Việc 
              sử dụng AI đóng vai trò quan trọng trong nghiên cứu, cấu trúc nội dung và 
              triển khai kỹ thuật, trong khi tất cả các phân tích quan trọng, khung lý 
              thuyết và đóng góp trí tuệ cuối cùng vẫn là công việc của tác giả.
            </p>
          </motion.div>
        </section>

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
              
              <div className="limitation-box">
                <h4>Hạn chế và Giám sát:</h4>
                <p>
                  Tất cả các diễn giải lý thuyết, lập luận phê phán và kết luận đều được 
                  phát triển độc lập bởi tác giả. Các kết quả đầu ra của ChatGPT được xem 
                  xét, chỉnh sửa và tinh chỉnh để đảm bảo độ chính xác.
                </p>
              </div>
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
              
              <div className="limitation-box">
                <h4>Cân nhắc Đạo đức:</h4>
                <p>
                  Vai trò của Claude chủ yếu là kỹ thuật và tổ chức. Nội dung trí tuệ, 
                  khung lý thuyết và quan điểm phê phán được cung cấp bởi tác giả.
                </p>
              </div>
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
              
              <div className="limitation-box">
                <h4>Trách nhiệm:</h4>
                <p>
                  Tất cả code được tạo bởi Copilot đều được xem xét, kiểm tra và xác 
                  thực bởi nhà phát triển.
                </p>
              </div>
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
              
              <div className="limitation-box">
                <h4>Cân nhắc Sáng tạo:</h4>
                <p>
                  Tất cả hình ảnh được tạo bởi Gemini đều được tác giả lựa chọn, chỉnh 
                  sửa và đảm bảo phù hợp với nội dung học thuật. Hình ảnh phục vụ mục 
                  đích minh họa và không thay thế cho phân tích văn bản.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Methodology */}
        <section className="content-section">
          <motion.div
            className="methodology-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Phương pháp và Cân nhắc Đạo đức</h2>
            
            <div className="methodology-grid">
              <div className="methodology-item">
                <h4>Mô hình Hợp tác Người-AI</h4>
                <p>
                  Dự án này áp dụng mô hình hợp tác trong đó các công cụ AI phục vụ như 
                  trợ lý chứ không phải là người sáng tạo tự chủ. Tác giả giữ quyền sở 
                  hữu trí tuệ đầy đủ và trách nhiệm cho tất cả nội dung được trình bày.
                </p>
              </div>

              <div className="methodology-item">
                <h4>Xác minh và Độ chính xác</h4>
                <p>
                  Tất cả các tuyên bố sự thật, tham chiếu lịch sử và khái niệm lý thuyết 
                  đều được tham chiếu chéo với các nguồn có thẩm quyền. Nội dung do AI 
                  tạo ra được coi là tài liệu nháp cần xác minh.
                </p>
              </div>

              <div className="methodology-item">
                <h4>Tính Trung thực Học thuật</h4>
                <p>
                  Việc sử dụng các công cụ AI không làm giảm giá trị học thuật. AI phục 
                  vụ như những trợ lý nhận thức và kỹ thuật khuếch đại khả năng con người.
                </p>
              </div>

              <div className="methodology-item">
                <h4>Tính Minh bạch</h4>
                <p>
                  Bằng cách ghi lại rõ ràng cách AI được sử dụng, chúng tôi đóng góp vào 
                  các tiêu chuẩn đang phát triển về trung thực học thuật trong thời đại 
                  trí tuệ nhân tạo.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Conclusion */}
        <section className="content-section">
          <motion.div
            className="contradiction-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Kết luận</h2>
            <p>
              Việc sử dụng ChatGPT, Claude Sonnet và GitHub Copilot trong dự án này phản 
              ánh cách tiếp cận có trách nhiệm và minh bạch đối với công việc học thuật 
              có sự hỗ trợ của AI. Các công cụ này được sử dụng để nâng cao hiệu quả 
              nghiên cứu, cải thiện độ rõ ràng và triển khai các giải pháp kỹ thuật, nhưng 
              cốt lõi trí tuệ của phân tích này vẫn là công việc của tác giả.
            </p>
            <p>
              Khi AI tiếp tục biến đổi nghiên cứu, viết và phát triển phần mềm, điều bắt 
              buộc là các học giả và sinh viên tương tác với các công cụ này một cách suy 
              nghĩ, có đạo đức và minh bạch.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default AIUsage;
