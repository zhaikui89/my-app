import React from 'react'
import { directive } from '@babel/types';
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';
import { dispatch } from 'rxjs/internal/observable/pairs';
const Header = (props) => {
    const { focused, handleInputFocus, handleInputBlur } = props
    return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                className={focused ? 'focused' : ''}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
                            &#xe614;
						</i>
                    </SearchWrapper>
                </Nav>
            </HeaderWrapper>
        ) 
}
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search-focused'
            }
            dispatch(action)
        },
        handleInputBlur () {
            const action = {type: 'blur-focused'}
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)