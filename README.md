This is a library that provides one common component for the UI: a button. By utilizing the below props, you can customize the behavior and look of your button!

## Props for Button:

#### label: string or React node:
  The label to be rendered on the button. It can be string or another React component.
#### You can have multiple predefined sizes of the button by supplying on of the following props:
- small: boolean
- medium: boolean
- large: boolean

#### disabled: boolean 
  Specify if the button is disabled or not.

#### fill: boolean
   Specify if you want the button to be filled with color or not.

#### icon: element: 
  An icon to be shown in the button. 
  
#### onClick: function: 
  Defines the behaviour on click.
  
#### onMouseDown: function
 Define the behaviour on mouseDown

#### onMouseUp: function
  Define the behaviour on mouseUp

####onFocus: function
  Define the behaviour on focus

#### onBlur: function
  Define the behaviour on blur.

#### className: string: 
  Trough this prop, you can add additional styles to your button.
#### plain: boolean
  If true, will render a plain, simple button.

#### reverse: boolean: 
  The label and icon are rendered depending on this prop.
  * true: label-icon
  * false: icon-label


#### This button offers the following color scheme:
* primary #F194B4
* secondary #F1E494
* accent #94D9F1
* critical #FF324D

You can set each color by specifying one of these props:
- critical: boolean
- primary: boolean
- secondary: boolean
- accent: boolean
#### type: string
 Specifies the type of the button. It can be one of: ["button", "reset", "submit"])
 
### Usage example
This creates a medium-sized button, filled with the accent color that has the text `Click me!` inside:

`<Button medium label={"Click me!"} accent fill />`