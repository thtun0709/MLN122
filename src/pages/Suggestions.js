import React from 'react';
import { motion } from 'framer-motion';
import './Suggestions.css';

function Suggestions() {
  return (
    <div className="suggestions-page">
      <div className="container">
        <section className="page-hero">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Định hướng Tương lai và Đề xuất
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hướng tới Kiểm soát Dân chủ Dữ liệu, Nền tảng và Cơ sở hạ tầng Số
          </motion.p>
        </section>

        <section className="content-section">
          <motion.div
            className="definition-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Phân tích về độc quyền dữ liệu hé lộ những mâu thuẫn cơ bản trong chủ nghĩa tư bản 
              hiện đại: bản chất xã hội hóa của sản xuất số đối lập với chiếm đoạt tư nhân, tiềm 
              năng tiếp cận tri thức phổ quát đối lập với khan hiếm nhân tạo, và lời hứa về giao 
              tiếp dân chủ đối lập với kiểm soát tập trung. Phần này đề xuất các hướng đi tương lai 
              cho nghiên cứu, chính sách và phong trào xã hội nhằm vượt qua những mâu thuẫn này và 
              xây dựng một tương lai số công bằng hơn.
            </p>
          </motion.div>
        </section>

        <section className="content-section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Các Lĩnh vực Nghiên cứu và Thảo luận Tiếp theo
          </motion.h2>

          {/* Suggestion 1 */}
          <motion.div
            className="suggestion-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="suggestion-header">
              <span className="suggestion-number">01</span>
              <h3>Dữ liệu là Hàng hóa Công cộng: Khung Lý thuyết và Thực tiễn</h3>
            </div>
            <div className="suggestion-content">
              <h4>Câu hỏi Nghiên cứu:</h4>
              <ul>
                <li>Làm thế nào để khái niệm hóa dữ liệu như một hàng hóa công cộng trong khung Mác-Lênin?</li>
                <li>Những tiền lệ lịch sử nào cho việc xã hội hóa các nguồn tài nguyên tư nhân hóa trước đây?</li>
                <li>Những hình thức thể chế nào có thể cho phép quản trị dữ liệu dân chủ?</li>
              </ul>
              
              <h4>Đề xuất Chính sách:</h4>
              <ul>
                <li>
                  <strong>Quỹ Ủy thác và Hợp tác xã Dữ liệu:</strong> Thiết lập khung pháp lý 
                  cho các quỹ ủy thác dữ liệu thuộc sở hữu và quản trị bởi người dùng, đảm bảo 
                  rằng dữ liệu được tạo ra bởi cá nhân và cộng đồng mang lại lợi ích công chúng 
                  thay vì các công ty tư nhân.
                </li>
                <li>
                  <strong>Quy định Dữ liệu Mở:</strong> Yêu cầu các công ty Big Tech chia sẻ 
                  dữ liệu ẩn danh, tổng hợp với các nhà nghiên cứu, nhà hoạch định chính sách 
                  và tổ chức xã hội dân sự để phân tích độc lập và phục vụ lợi ích công.
                </li>
                <li>
                  <strong>Cơ sở hạ tầng Dữ liệu Công cộng:</strong> Đầu tư vào cơ sở hạ tầng 
                  dữ liệu thuộc sở hữu công (dịch vụ đám mây, trung tâm dữ liệu, mạng truyền 
                  thông) để cân bằng với các độc quyền tư nhân.
                </li>
              </ul>

              <h4>Điểm Thảo luận:</h4>
              <p>
                Nếu dữ liệu được tạo ra cùng nhau và không cạnh tranh (việc một người sử dụng 
                không làm giảm khả năng của người khác), tại sao nó lại thuộc sở hữu tư nhân? 
                Một mô hình quản trị dữ liệu dân chủ, xã hội chủ nghĩa sẽ trông như thế nào? 
                Làm thế nào để ngăn chặn các hình thức giám sát nhà nước mới trong khi xã hội 
                hóa cơ sở hạ tầng dữ liệu?
              </p>
            </div>
          </motion.div>

          {/* Suggestion 2 */}
          <motion.div
            className="suggestion-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="suggestion-header">
              <span className="suggestion-number">02</span>
              <h3>Phá vỡ Big Tech: Cải cách Chống độc quyền và Cấu trúc</h3>
            </div>
            <div className="suggestion-content">
              <h4>Câu hỏi Nghiên cứu:</h4>
              <ul>
                <li>Các khung chống độc quyền truyền thống có đủ để giải quyết các độc quyền số không?</li>
                <li>Kinh nghiệm so sánh về thực thi chống độc quyền ở Mỹ, EU và Trung Quốc là gì?</li>
                <li>Có thể điều chỉnh các độc quyền hay phải tháo dỡ chúng?</li>
              </ul>
              
              <h4>Đề xuất Chính sách:</h4>
              <ul>
                <li>
                  <strong>Khả năng Tương tác Nền tảng:</strong> Yêu cầu khả năng tương tác 
                  giữa các nền tảng mạng xã hội, ứng dụng nhắn tin và dịch vụ số để phá vỡ 
                  vườn tường và cho phép cạnh tranh.
                </li>
                <li>
                  <strong>Tách biệt Cấu trúc:</strong> Tách quyền sở hữu nền tảng khỏi việc 
                  cung cấp dịch vụ (ví dụ: Amazon không thể vừa sở hữu thị trường vừa bán sản 
                  phẩm trên đó).
                </li>
                <li>
                  <strong>Cấm Mua lại Chống cạnh tranh:</strong> Chặn các vụ sáp nhập và mua 
                  lại củng cố quyền lực thị trường (ví dụ: Facebook mua Instagram và WhatsApp).
                </li>
                <li>
                  <strong>Quốc hữu hóa hoặc Sở hữu Công:</strong> Xem xét sở hữu công của cơ 
                  sở hạ tầng số thiết yếu (công cụ tìm kiếm, mạng xã hội, điện toán đám mây) 
                  như các tiện ích phục vụ lợi ích công.
                </li>
              </ul>

              <h4>Điểm Thảo luận:</h4>
              <p>
                Quy định có đủ không, hay các độc quyền chắc chắn sẽ củng cố lại quyền lực? 
                Các nền tảng số có nên được xem như tiện ích công cộng không? Chúng ta có thể 
                học được gì từ các nỗ lực phá vỡ độc quyền trong quá khứ (ví dụ: Standard Oil, 
                AT&T)? Nhà nước nên đóng vai trò gì trong quản lý cơ sở hạ tầng số?
              </p>
            </div>
          </motion.div>

          {/* Suggestion 3 */}
          <motion.div
            className="suggestion-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="suggestion-header">
              <span className="suggestion-number">03</span>
              <h3>Minh bạch Thuật toán và Trách nhiệm Dân chủ</h3>
            </div>
            <div className="suggestion-content">
              <h4>Câu hỏi Nghiên cứu:</h4>
              <ul>
                <li>Thuật toán định hình diễn ngôn chính trị, cơ hội kinh tế và hành vi xã hội như thế nào?</li>
                <li>Ai kiểm soát thiết kế và triển khai hệ thống AI, và vì lợi ích của ai?</li>
                <li>Cơ chế nào có thể đảm bảo trách nhiệm giải trình thuật toán?</li>
              </ul>
              
              <h4>Đề xuất Chính sách:</h4>
              <ul>
                <li>
                  <strong>Kiểm toán Thuật toán Bắt buộc:</strong> Yêu cầu kiểm toán độc lập 
                  các thuật toán được sử dụng cho tìm kiếm, kiểm duyệt nội dung, tuyển dụng, 
                  cho vay và các quyết định quan trọng khác để xác định thiên vị, phân biệt đối 
                  xử và thao túng.
                </li>
                <li>
                  <strong>Mô hình AI Mã nguồn Mở:</strong> Thúc đẩy phát triển mã nguồn mở 
                  của AI và hệ thống học máy để dân chủ hóa quyền truy cập và cho phép giám 
                  sát công khai.
                </li>
                <li>
                  <strong>Quyền được Giải thích:</strong> Đảm bảo quyền của người dùng hiểu 
                  cách các quyết định thuật toán được đưa ra (ví dụ: tại sao một số nội dung 
                  được đề xuất, tại sao đơn vay bị từ chối).
                </li>
                <li>
                  <strong>Quản trị Dân chủ AI:</strong> Thiết lập các cơ quan quản trị đa bên 
                  liên quan (bao gồm công nhân, người dùng và xã hội dân sự) để giám sát việc 
                  phát triển và triển khai hệ thống AI.
                </li>
              </ul>

              <h4>Điểm Thảo luận:</h4>
              <p>
                Thuật toán có thể trung lập không, hay chúng tất yếu phản ánh lợi ích của người 
                tạo ra chúng? Làm thế nào để đảm bảo AI phục vụ lợi ích xã hội thay vì tối đa 
                hóa lợi nhuận? Kiểm soát dân chủ đối với AI trông như thế nào trong thực tế?
              </p>
            </div>
          </motion.div>

          {/* Suggestion 4 */}
          <motion.div
            className="suggestion-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="suggestion-header">
              <span className="suggestion-number">04</span>
              <h3>Lao động và Kinh tế Số: Quyền Công nhân trong Thời đại Nền tảng</h3>
            </div>
            <div className="suggestion-content">
              <h4>Câu hỏi Nghiên cứu:</h4>
              <ul>
                <li>Chủ nghĩa tư bản nền tảng bóc lột lao động như thế nào (công nhân gig, người sáng tạo nội dung, người gắn nhãn dữ liệu)?</li>
                <li>Những hình thức tổ chức công nhân nào đang nổi lên trong kinh tế số?</li>
                <li>Tự động hóa đe dọa việc làm như thế nào, và có những phương án thay thế nào?</li>
              </ul>
              
              <h4>Đề xuất Chính sách:</h4>
              <ul>
                <li>
                  <strong>Bảo vệ Công nhân Nền tảng:</strong> Mở rộng quyền lao động (lương 
                  tối thiểu, phúc lợi, thương lượng tập thể) cho công nhân gig trên các nền 
                  tảng như Uber, DoorDash và Amazon Mechanical Turk.
                </li>
                <li>
                  <strong>Giám sát Quản lý Thuật toán:</strong> Điều chỉnh các hệ thống quản 
                  lý thuật toán để ngăn chặn bóc lột, chấm dứt tùy tiện và giám sát công nhân.
                </li>
                <li>
                  <strong>Hợp tác xã Nền tảng:</strong> Hỗ trợ các hợp tác xã nền tảng thuộc 
                  sở hữu công nhân như thay thế cho nền tảng công ty, cho phép công nhân kiểm 
                  soát lao động và chia sẻ lợi nhuận một cách dân chủ.
                </li>
                <li>
                  <strong>Dịch vụ Cơ bản Phổ quát:</strong> Khi tự động hóa thay thế lao động, 
                  khám phá các chính sách như thu nhập cơ bản phổ quát, chăm sóc sức khỏe phổ 
                  quát và nhà ở công cộng để tách sự sống còn khỏi việc làm.
                </li>
              </ul>

              <h4>Điểm Thảo luận:</h4>
              <p>
                Công nhân có thể xây dựng quyền lực trong chủ nghĩa tư bản nền tảng không, hay 
                mô hình này vốn làm suy yếu lao động? Công đoàn nên đóng vai trò gì trong kinh 
                tế số? Làm thế nào để đảm bảo tự động hóa mang lại lợi ích cho xã hội thay vì 
                tập trung thêm của cải?
              </p>
            </div>
          </motion.div>

          {/* Suggestion 5 */}
          <motion.div
            className="suggestion-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="suggestion-header">
              <span className="suggestion-number">05</span>
              <h3>Chủ quyền Số và Động lực Quyền lực Toàn cầu</h3>
            </div>
            <div className="suggestion-content">
              <h4>Câu hỏi Nghiên cứu:</h4>
              <ul>
                <li>Chủ quyền số là gì, và các quốc gia khẳng định nó như thế nào?</li>
                <li>Sự cạnh tranh công nghệ Mỹ-Trung định hình quản trị số toàn cầu như thế nào?</li>
                <li>Các quốc gia nhỏ hơn có thể đạt được độc lập số không, hay họ bị khóa vào sự phụ thuộc?</li>
              </ul>
              
              <h4>Đề xuất Chính sách:</h4>
              <ul>
                <li>
                  <strong>Cơ sở hạ tầng Số Khu vực:</strong> Khuyến khích hợp tác khu vực 
                  để xây dựng cơ sở hạ tầng số độc lập (dịch vụ đám mây, hệ thống thanh toán, 
                  nền tảng truyền thông) để giảm sự phụ thuộc vào các gã khổng lồ công nghệ 
                  Mỹ và Trung Quốc.
                </li>
                <li>
                  <strong>Địa phương hóa Dữ liệu với Quản trị Dân chủ:</strong> Yêu cầu dữ 
                  liệu được tạo ra trong một quốc gia phải được lưu trữ tại địa phương, nhưng 
                  đảm bảo giám sát dân chủ để ngăn chặn giám sát độc tài.
                </li>
                <li>
                  <strong>Tài sản chung Số Toàn cầu:</strong> Ủng hộ các thỏa thuận quốc tế 
                  để xem một số tài nguyên số nhất định (dữ liệu khoa học, lưu trữ văn hóa, 
                  tài liệu giáo dục) là tài sản chung toàn cầu có thể truy cập cho tất cả.
                </li>
                <li>
                  <strong>Chuyển giao Công nghệ và Tiêu chuẩn Mở:</strong> Thúc đẩy chuyển 
                  giao công nghệ từ các quốc gia tiên tiến đến các quốc gia đang phát triển 
                  và hỗ trợ các tiêu chuẩn mở để ngăn chặn khóa độc quyền.
                </li>
              </ul>

              <h4>Điểm Thảo luận:</h4>
              <p>
                Chủ quyền số có thể cùng tồn tại với hợp tác toàn cầu không, hay nó dẫn đến 
                phân mảnh? Các quốc gia đang phát triển có thể tránh bị mắc kẹt giữa các đế 
                chế số cạnh tranh như thế nào? Một chính sách số quốc tế chủ nghĩa thực sự sẽ 
                trông như thế nào?
              </p>
            </div>
          </motion.div>

          {/* Suggestion 6 */}
          <motion.div
            className="suggestion-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="suggestion-header">
              <span className="suggestion-number">06</span>
              <h3>Sở hữu Trí tuệ và Rào cản Tri thức</h3>
            </div>
            <div className="suggestion-content">
              <h4>Câu hỏi Nghiên cứu:</h4>
              <ul>
                <li>Các chế độ sở hữu trí tuệ hạn chế quyền truy cập tri thức và đổi mới như thế nào?</li>
                <li>Có những phương án thay thế nào cho hệ thống bằng sáng chế và bản quyền?</li>
                <li>Làm thế nào để cân bằng động lực sáng tạo với xã hội hóa tri thức?</li>
              </ul>
              
              <h4>Đề xuất Chính sách:</h4>
              <ul>
                <li>
                  <strong>Quy định Truy cập Mở:</strong> Yêu cầu nghiên cứu được tài trợ công 
                  phải được công bố trên các tạp chí truy cập mở, miễn phí cho công chúng.
                </li>
                <li>
                  <strong>Cấp phép Bắt buộc:</strong> Cho phép chính phủ vượt qua bằng sáng 
                  chế trong trường hợp nhu cầu công cộng (ví dụ: thuốc, công nghệ khí hậu).
                </li>
                <li>
                  <strong>Creative Commons và Copyleft:</strong> Thúc đẩy các khung cấp phép 
                  thay thế cho phép chia sẻ và phát triển cộng tác trong khi bảo vệ chống lại 
                  bóc lột.
                </li>
                <li>
                  <strong>Tài trợ Công cho Đổi mới Mã nguồn Mở:</strong> Tăng đầu tư công vào 
                  phần mềm mã nguồn mở, dữ liệu mở và nền tảng nghiên cứu hợp tác như thay thế 
                  cho các hệ thống độc quyền.
                </li>
              </ul>

              <h4>Điểm Thảo luận:</h4>
              <p>
                Sở hữu trí tuệ có tương thích với một tương lai xã hội chủ nghĩa không, hay tri 
                thức phải được xã hội hóa hoàn toàn? Làm thế nào để tưởng thưởng người sáng tạo 
                mà không hàng hóa hóa tri thức? Chúng ta có thể học được gì từ phong trào mã 
                nguồn mở và lịch sử hợp tác khoa học?
              </p>
            </div>
          </motion.div>
        </section>

        <section className="content-section">
          <motion.div
            className="contradiction-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Suy ngẫm Kết luận</h2>
            <p>
              Sự chuyển đổi từ độc quyền dầu mỏ sang độc quyền dữ liệu không đánh dấu sự kết 
              thúc của các mâu thuẫn tư bản chủ nghĩa, mà là sự tăng cường chúng. Các giải pháp 
              được đề xuất ở đây—dữ liệu là hàng hóa công cộng, hợp tác xã nền tảng, minh bạch 
              thuật toán, chủ quyền số—không chỉ đơn thuần là các cải cách kỹ thuật hay quy định. 
              Chúng đại diện cho các bước tiến tới một tổ chức lại cơ bản các mối quan hệ kinh tế 
              và xã hội: dân chủ hóa sản xuất số và xã hội hóa tri thức.
            </p>
            <p>
              Những đề xuất này là điểm khởi đầu cho thảo luận, không phải bản thiết kế cuối cùng. 
              Chúng mời gọi các học giả, nhà hoạt động, nhà hoạch định chính sách và công nhân hãy 
              tưởng tượng các phương án thay thế cho trật tự độc quyền hiện tại. Câu hỏi không phải 
              là liệu sự thay đổi có cần thiết không—các mâu thuẫn của độc quyền dữ liệu đã làm rõ 
              điều đó—mà là hình thức thay đổi đó sẽ như thế nào, và vì lợi ích của ai.
            </p>
            <p>
              Thời đại số cung cấp những khả năng chưa từng có cho sự phát triển con người: quyền 
              truy cập tri thức phổ quát, giao tiếp toàn cầu, đổi mới cộng tác và tự động hóa lao 
              động cần thiết. Nhưng những khả năng này chỉ có thể được hiện thực hóa nếu chúng ta 
              phá vỡ sự kiểm soát của chủ nghĩa tư bản độc quyền và xây dựng một tài sản chung số 
              được quản trị dân chủ và hướng tới lợi ích chung.
            </p>
            <p className="final-statement">
              Tương lai không được định sẵn. Nó sẽ được định hình bởi các cuộc đấu tranh, phong 
              trào và quyết định được đưa ra ngày hôm nay. Hãy để phân tích này phục vụ như một 
              đóng góp cho cuộc đấu tranh đang diễn ra đó.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Suggestions;
