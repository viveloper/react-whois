import React from 'react';
import { AutoComplete, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function SearchInput() {
  const setKeyword = (value) => {};
  const gotoUser = (value) => {};
  const keyword = '';
  return (
    <AutoComplete
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      style={{ width: '100%' }}
      value={keyword}
      onChange={setKeyword}
      onSelect={gotoUser}
      options={[]}
      autoFocus
    >
      <Input
        size="large"
        placeholder="input here"
        prefix={<SearchOutlined />}
      />
    </AutoComplete>
  );
}

export default SearchInput;
