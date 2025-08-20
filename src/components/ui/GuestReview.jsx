import React from "react";

import MrTri from "@assets/guest/anh_tri.jpg";
import MrTu from "@assets/guest/anh_tu.jpg";
import MsHanh from "@assets/guest/minh_hanh.jpg";

import CustomerReviewSlider from "../common/CustomterReviewSlider";

const reviewList = [
  {
    avatar: MrTri,
    name: "Vợ chồng anh Trí – chị Phượng",
    location: "TP. HCM",
    review:
      "Lúc đầu vợ chồng mình rất lo lắng không biết chọn gói bảo hiểm nào phù hợp. Nhờ Ms. Phạm Tuyền tư vấn tận tình, phân tích rõ từng quyền lợi, giờ cả gia đình đã có kế hoạch tài chính an toàn và vững chắc cho tương lai con nhỏ. Rất yên tâm và biết ơn chị!",
  },
  {
    avatar: MsHanh,
    name: "Cô Minh Hạnh",
    location: "Bình Dương",
    review:
      "Tôi từng nghĩ bảo hiểm rất phức tạp, nhiều điều khoản khó hiểu. Nhưng khi được Ms. Phạm Tuyền giải thích chi tiết, minh họa rõ ràng, tôi nhận ra đây thực sự là giải pháp thiết thực. Giờ tôi không chỉ bảo vệ được sức khỏe, mà còn có kế hoạch hưu trí ổn định.",
  },
  {
    avatar: MrTu,
    name: "Anh Tuấn Tú",
    location: "Vũng Tàu",
    review:
      "Trong công việc kinh doanh, tôi luôn đề cao sự rõ ràng và hiệu quả. Ms. Phạm Tuyền đã giúp tôi lựa chọn gói bảo hiểm vừa bảo vệ cá nhân, vừa kết hợp đầu tư dài hạn. Cách làm việc chuyên nghiệp và chân thành của chị khiến tôi hoàn toàn tin tưởng.",
  },
];

function GuestReview() {
  return <CustomerReviewSlider reviews={reviewList} />;
}

export default GuestReview;
