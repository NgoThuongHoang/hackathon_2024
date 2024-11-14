import React from 'react';
import GridItem from './GridItem';

const MainContent = () => {
  return (
    <main className="content">
      <div className="search-bar">
        <input type="text" placeholder="Tìm kiếm" />
        <button className="search-button" type="button">
          <img src="./public/img/search.png" alt="Search Icon" />
        </button>
      </div>

      <div className="content-layout">
        <div className="grid">
          <GridItem link="./ChucNang.html" icon="./public/img/User.png" title="Quản Lý Nhân Sự" />
          <GridItem link="./ChucNang.html" icon="./public/img/User.png" title="Quản Lý Tài Chính" />
          <GridItem link="./ChucNang.html" icon="./public/img/User.png" title="Quản Lý Công Việc" />
          <GridItem link="./ChucNang.html" icon="./public/img/User.png" title="Quản Lý Cơ Sở Vật Chất" />
          <GridItem link="./ChucNang.html" icon="./public/img/User.png" title="Đánh giá thi đua" />
          <GridItem link="./ChucNang.html" icon="./public/img/User.png" title="Khen thưởng, kỷ luật" />
          <GridItem link="./ChucNang.html" icon="./public/img/User.png" title="Khảo sát và bình chọn" />
          <GridItem link="./ChucNang.html" icon="./public/img/User.png" title="Tìm kiếm thông tin" />
          <GridItem link="./ChucNang.html" icon="./public/img/User.png" title="Lưu Tài Liệu" />
        </div>
      </div>
    </main>
  );
};

export default MainContent;