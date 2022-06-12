import React from 'react';
import styled from 'styled-components';
import {IRes} from "./form";

const Container = styled.div`
  width: calc(50% - 32px);
  height: 500px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 72px;
  padding: 0 16px;
  border-bottom: 1px solid #cccccc;
  background-color: #34568b33;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;

const ResponseWrapper = styled.div`
  width: 100%;
  height: calc(100% - 72px);
  padding: 32px 16px;
  font-size: 16px;
`;

interface Props {
  res?: IRes;
  req: string;
}

const Output = ({ res, req }: Props) => {
  return (
    <Container>
      <Header>Detection Result</Header>
      <ResponseWrapper>
        {res?.req || ''}
          {res?.result === 0 && <p>{res?.result ===  0 && 'Not a hate speech'}</p>}
          {res?.result === 1 && <p>{res?.result ===  1 && 'Hate speech'}</p>}
          <p>{JSON.stringify(res?.index) || ''}</p>
      </ResponseWrapper>
    </Container>
  );
};

export default Output;
