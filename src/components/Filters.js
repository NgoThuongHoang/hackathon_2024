import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export const ProjectFilter = ({ projects, onChange }) => (
  <Select
    placeholder="Chọn dự án"
    style={{ width: 200, marginRight: 16 }}
    onChange={onChange}
    allowClear
  >
    {projects?.map(project => (
      <Option key={project.id} value={project.id}>{project.name}</Option>
    ))}
  </Select>
);

export const StatusFilter = ({ onChange }) => (
  <Select
    placeholder="Chọn trạng thái"
    style={{ width: 200, marginRight: 16 }}
    onChange={onChange}
    allowClear
  >
    <Option value="pending">Đang chờ</Option>
    <Option value="in_progress">Đang thực hiện</Option>
    <Option value="completed">Hoàn thành</Option>
  </Select>
);

export const MemberFilter = ({ members, onChange }) => (
  <Select
    placeholder="Chọn thành viên"
    style={{ width: 200 }}
    onChange={onChange}
    allowClear
  >
    {members?.map(member => (
      <Option key={member.id} value={member.id}>{member.name}</Option>
    ))}
  </Select>
); 