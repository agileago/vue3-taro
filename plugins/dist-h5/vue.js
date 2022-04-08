import createComponent from '@tarojs/components/dist-h5/vue3/createComponent'
import createFormsComponent from '@tarojs/components/dist-h5/vue3/createFormsComponent'
import Icon from '@tarojs/components/dist-h5/vue3/components/icon'
import Text from '@tarojs/components/dist-h5/vue3/components/text'
import Image from '@tarojs/components/dist-h5/vue3/components/image'
import ScrollView from '@tarojs/components/dist-h5/vue3/components/scroll-view'

export {
  Icon,
  Text,
  Image,
  ScrollView,
}

export const View = createComponent('taro-view')
export const RichText = createComponent('taro-rich-text')
export const Button = createComponent('taro-button')
export const CheckboxGroup = createComponent('taro-checkbox-group')
export const Editor = createComponent('taro-editor')
export const Form = createComponent('taro-form')
export const Label = createComponent('taro-label')
export const PickerView = createComponent('taro-picker-view')
export const PickerViewColumn = createComponent('taro-picker-view-column')
export const CoverImage = createComponent('taro-cover-image')
export const CoverView = createComponent('taro-cover-view')
export const MovableArea = createComponent('taro-movable-area')
export const MovableView = createComponent('taro-movable-view')
export const Swiper = createComponent('taro-swiper')
export const FunctionalPageNavigator = createComponent('taro-functional-page-navigator')
export const Navigator = createComponent('taro-navigator')
export const Audio = createComponent('taro-audio')
export const Camera = createComponent('taro-camera')
export const LivePlayer = createComponent('taro-live-player')
export const Map = createComponent('taro-map')
export const Ad = createComponent('taro-ad')
export const OfficialAccount = createComponent('taro-official-account')
export const OpenData = createComponent('taro-open-data')
export const WebView = createComponent('taro-web-view')
export const NavigationBar = createComponent('taro-navigation-bar')
export const Block = createComponent('taro-block')
export const Canvas = createComponent('taro-canvas')
export const CustomWrapper = createComponent('taro-custom-wrapper')
export const Checkbox = createComponent('taro-checkbox', ['weui-cells_checkbox'])
export const Progress = createComponent('taro-progress', ['weui-progress'])
export const RadioGroup = createComponent('taro-radio-group', ['weui-cells_radiogroup'])
export const Radio = createComponent('taro-radio', ['weui-cells_checkbox'])
export const SwiperItem = createComponent('taro-swiper-item', ['swiper-slide'])
export const Video = createComponent('taro-video', ['taro-video-container'])
export const Slot = createComponent('taro-slot')

export const Input = createFormsComponent('taro-input', 'input')
export const Textarea = createFormsComponent('taro-textarea', 'input')
export const Picker = createFormsComponent('taro-picker', 'change')
export const Switch = createFormsComponent('taro-switch', 'change', 'checked')
export const Slider = createFormsComponent('taro-slider', 'change', 'value', ['weui-slider-box'])





