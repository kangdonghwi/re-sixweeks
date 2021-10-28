import React from "react";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <AppLayout>
        <BackgroundImg>
          <BgCenter>
            <BgText>
              <br />
              안전한 글로벌 암호화폐 거래소의 표준
              <br />
              SIXWEEKS에서 다양한 암호화폐 거래해 보세요
            </BgText>
            <MoreBox>
              <a href="https://github.com/SUJEONG2YA/sixweeks">
                <More> 더 알아보기</More>
              </a>
            </MoreBox>
          </BgCenter>
          <SqboxWrapper>
            <Sqbox>
              <h5>비트코인</h5>
            </Sqbox>
            <Sqbox>
              <h5>비트코인</h5>
            </Sqbox>
            <Sqbox>
              <h5>비트코인</h5>
            </Sqbox>
          </SqboxWrapper>
        </BackgroundImg>
        <Story>
          <img src="/static/img/sixweeksstory.png"></img>
        </Story>
      </AppLayout>
    </>
  );
};

export default Home;

const BackgroundImg = styled.div`
  background-image: url("/static/img/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 712px;
`;
const BgCenter = styled.div`
  width: 1366px;
  margin: 0 auto;
  text-align: center;
`;
const BgText = styled.h1`
  font-weight: 500;
  font-size: 30px;
  padding-top: 100px;
`;
const MoreBox = styled.div`
  background-color: #ffffff;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  margin-top: 100px;
  display: inline-block;
`;
const More = styled.div`
  color: #343638;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
`;
const SqboxWrapper = styled.div`
  width: 80%;
  margin-top: 200px;
  text-align: center;
`;
const Sqbox = styled.div`
  display: inline-block;
  width: 300px;
  height: 200px;
  border: solid 1px #bcbcbc;
  background-color: #ffffff;
`;
const Story = styled.section`
  width: 80%;
  margin: 0 auto;
`;
