import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { createGlobalStyle, } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify, faCodePullRequest, faBug, faXmark } from '@fortawesome/free-solid-svg-icons'

const GlobalStyle = createGlobalStyle`
    *{
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: "PT Sans";
    }
`;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 420px 3fr;
  grid-template-areas: 
    "header  header"
    "sidebar content"
`;

const Content = styled.div`
  grid-area: content;
  height: 100vh;
  background-color: rgb(16,15,15);
`;

const Sidebar = styled.div`
  grid-area: sidebar;
  height: 100vh;
  background-color: rgb(33,33,33);
  color: rgb(170,170,170);
`;

const SidebarHeader = styled.div`
    min-height: 56px;
    padding: 8px 16px 0 16px;
    border-bottom: 1px solid rgb(16,15,15);
    margin-bottom: 5px;
`;

const SidebarButton = styled.div`
    width: 40px;
    height: 40px;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    border-radius: 20px;
    
    &:hover {
        background-color: rgb(44,44,44);
    }
`;

//Only use it to wrap all FA icons to make it visually correct in webview wrapper
const IconWrapper = styled.div`
    width: ${props => props.size ? props.size : "14px" };
    height: ${props => props.size ? props.size : "14px" };
    display: inline-block;
    margin: 0 auto;
`;

const SidebarTabs = styled.div`
    height: 48px;
    margin-top: 8px;
`;

const SidebarTab = styled.div`
    display: inline-block;
    padding: 15px 15px 0 15px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.active ? "rgb(41,39,48)" : "rgb(43,43,43)"};
    }
    
    ${props => props.active ? "color: rgb(132,117,218)" : ""};
`;

const SidebarTabActiveLiner = styled.div`
    height: 3px;
    background-color: rgb(132,117,218);
    visibility: hidden;
    margin-top: 9px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    
     ${props => props.active ? "visibility: visible" : ""};
`;

const Chats = styled.div`
    padding: 8px 16px 0 16px;
`;

const Chat = styled.div`
    padding: 10px 18px;
    cursor: pointer;
    border-radius: 10px;
    
    &:hover {
        background-color: ${props => props.active ? "rgb(132,117,218)" : "rgb(43,43,43)"};
    }
    
    ${props => props.active ? "background-color: rgb(132,117,218)" : ""};
`;

const ChatHeader = styled.div`
    color: rgb(255,255,255);
    font-weight: bold;
    margin: 0 0 10px 0;
`;

const ChatSender = styled.div`
    display: inline-block;
    color: rgb(255,255,255);
`;

const MessagesHeader = styled.div`
    height: 56px;
    background-color: rgb(33,33,33);
    border-left: 1px solid rgb(16,15,15);
    display: flex;
`;

const MessagesHeaderTitle = styled.div`
    color: white;
    font-size: 18px;
    padding: 16px;
    flex: 1 1 auto;
`;

const MessagesHeaderCloseIcon = styled.div`
    font-size: 20px;
    color: white;
    flex: 0 0 auto;
    padding: 16px;
    color: rgb(170,170,170);
    cursor: pointer;
`;

const Messages = styled.div`
    color: white;
`;

const Message = styled.div`
    background-color: rgb(33,33,33);
    width: 500px;
    padding: 10px 20px;
    margin: 10px 0 0 100px;
    border-radius: 10px;
   
   ${props => props.my ? "background-color: rgb(132,117,218); color: white; margin: 10px auto;" : ""};
`;

const MessageAuthor = styled.div`
    font-weight: bold;
    color: rgb(132,117,218);
`;

const SearchInput = styled.input`
    height: 42px;
    background-color: rgb(24,24,24);
    border-style: solid;
    border-color: rgb(42,42,42);
    margin: 0 10px;
    width: 100%;
    border-radius: 20px;
    padding: 20px;
    font-size: 15px;
    color: white;
`;

const SidebarSearchContainer = styled.div`
    display: flex;
`;

const MessageInput = styled.textarea`
    min-height: 30px;
    background-color: rgb(24,24,24);
    border-style: solid;
    border-color: rgb(42,42,42);
    margin: 80px 100px 0 100px;
    width: 800px;
    border-radius: 20px;
    padding: 20px;
    font-size: 15px;
    color: white;
`;

const App = () => {
    return (
        <AppContainer>
            <GlobalStyle/>
            <Sidebar>
                <SidebarHeader>
                    <SidebarSearchContainer>
                        <SidebarButton>
                            <IconWrapper>
                                <FontAwesomeIcon icon={faAlignJustify}  />
                            </IconWrapper>
                        </SidebarButton>
                        <SearchInput placeholder="Search PR or Issue"/>
                    </SidebarSearchContainer>
                    <SidebarTabs>
                        <SidebarTab active="true">All Chats<SidebarTabActiveLiner active={true}/></SidebarTab>
                        <SidebarTab>Pull Requests<SidebarTabActiveLiner/></SidebarTab>
                        <SidebarTab>Issues<SidebarTabActiveLiner/></SidebarTab>
                    </SidebarTabs>
                </SidebarHeader>
                <Chats>
                    <Chat active="true">
                        <ChatHeader><IconWrapper><FontAwesomeIcon icon={faCodePullRequest} /></IconWrapper>&nbsp;&nbsp;Pull request 1</ChatHeader>
                        <div><ChatSender>John:</ChatSender> Last message of pull request  ... </div>
                    </Chat>
                    <Chat>
                        <ChatHeader><IconWrapper><FontAwesomeIcon icon={faCodePullRequest} /></IconWrapper>&nbsp;&nbsp;Pull request 2</ChatHeader>
                        <div><ChatSender>Sam:</ChatSender> Last message of pull request contains ... </div>
                    </Chat>
                    <Chat>
                        <ChatHeader><IconWrapper><FontAwesomeIcon icon={faBug} /></IconWrapper>&nbsp;&nbsp;Issue 1</ChatHeader>
                        <div><ChatSender>Will:</ChatSender> Last message of issue ... </div>
                    </Chat>
                    <Chat>
                        <ChatHeader><IconWrapper><FontAwesomeIcon icon={faCodePullRequest} /></IconWrapper>&nbsp;&nbsp;Pull request 3</ChatHeader>
                        <div><ChatSender>Bob:</ChatSender> Last message of pull request contains ... </div>
                    </Chat>
                    <Chat>
                        <ChatHeader><IconWrapper><FontAwesomeIcon icon={faCodePullRequest} /></IconWrapper>&nbsp;&nbsp;Pull request 2</ChatHeader>
                        <div><ChatSender>Sam:</ChatSender> Last message of pull request contains ... </div>
                    </Chat>
                    <Chat>
                        <ChatHeader><IconWrapper><FontAwesomeIcon icon={faBug} /></IconWrapper>&nbsp;&nbsp;Issue 1</ChatHeader>
                        <div><ChatSender>Will:</ChatSender> Last message of issue ... </div>
                    </Chat>
                    <Chat>
                        <ChatHeader><IconWrapper><FontAwesomeIcon icon={faCodePullRequest} /></IconWrapper>&nbsp;&nbsp;Pull request 3</ChatHeader>
                        <div><ChatSender>Bob:</ChatSender> Last message of pull request contains ... </div>
                    </Chat>
                    <Chat>
                        <ChatHeader><IconWrapper><FontAwesomeIcon icon={faCodePullRequest} /></IconWrapper>&nbsp;&nbsp;Pull request 2</ChatHeader>
                        <div><ChatSender>Sam:</ChatSender> Last message of pull request contains ... </div>
                    </Chat>
                </Chats>
            </Sidebar>
            <Content>
                <MessagesHeader>
                    <MessagesHeaderTitle><IconWrapper><FontAwesomeIcon icon={faCodePullRequest} /></IconWrapper>&nbsp;&nbsp;&nbsp;Pull request 1 - there is full title from pull request</MessagesHeaderTitle>
                    <MessagesHeaderCloseIcon><IconWrapper><FontAwesomeIcon icon={faXmark} /></IconWrapper></MessagesHeaderCloseIcon>
                </MessagesHeader>
                <Messages>
                    <Message><MessageAuthor>John</MessageAuthor>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore inventore libero odit quidem! Animi architecto beatae dicta dignissimos ducimus eum excepturi facilis fugiat, id in magni temporibus voluptate voluptatum!</Message>
                    <Message><MessageAuthor>Sam</MessageAuthor>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore inventore libero odit quidem!</Message>
                    <Message my="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore inventore libero odit quidem! Animi architecto beatae dicta dignissimos</Message>
                    <Message><MessageAuthor>Sam</MessageAuthor>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore inventore libero odit quidem!</Message>
                    <Message my="true">Lorem ipsum dolor sit amet</Message>
                    <Message><MessageAuthor>John</MessageAuthor>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore inventore libero odit quidem! Animi architecto beatae dicta dignissimos ducimus eum excepturi facilis fugiat, id in magni temporibus voluptate voluptatum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore inventore libero odit quidem! Animi architecto beatae dicta dignissimos ducimus eum excepturi facilis fugiat, id in magni temporibus voluptate voluptatum!</Message>
                    <MessageInput placeholder="Enter message and press ENTER to send.."/>
                </Messages>
            </Content>
        </AppContainer>
    );
}

document.addEventListener('DOMContentLoaded', function(e) {
    ReactDOM.render(<App/>, document.body.appendChild(document.createElement('DIV')));
});
