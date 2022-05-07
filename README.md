##Props for Button:

####label: string or React node:
  The label to be rendered on the button. It can be string or another React component.
####You can have multiple predefined sizes of the button by supplying on of the following props:
####small: boolean:
  One size variant of the button.
####medium: boolean:
  One size variant of the button.
####large: PropTypes.bool:
  One size variant of the button.

####disabled: boolean: 
  Specify if the button is disabled or not.

####fill: boolean

####icon: element: 
  The icon to be shown in the button. 
  
####onClick: function: 
  Defines the behaviour on click.
  
####onMouseDown: function
 Define the behaviour on mouseDown

####onMouseUp: function
  Define the behaviour on mouseUp

####onFocus: function
  Define the behaviour on focus

####onBlur: function
  Define the behaviour on blur.

####className: string: 
  Trough this prop, you can add additional styles to the button.
####plain: boolean
  If true, will render a plain button.

####reverse: boolean: 
  The label and icon are rendered depending on this props.
  * true: label-icon
  * false: icon-label


####This button offers the following color scheme:
* primary #F194B4
* secondary #F1E494
* accent #94D9F1
* critical #FF324D
You can set to use each color by specifying the onw of these props:
####critical: boolean
####primary: boolean
####secondary: boolean
####accent: boolean
####type: string
 Can be one of: ["button", "reset", "submit"]),