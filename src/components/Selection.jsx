import React from 'react';
import { Button, Flex } from 'antd';

function Selection(props) {
  return (
    <Flex gap="small" wrap justify="center">
      <Button
        type="link"
        size="large"
        color="primary"
        variant="outlined"
        style={{ margin: '20px', padding: '30px 50px' }}
      >
        {props.option}
      </Button>
    </Flex>
  );
}

export default Selection;
