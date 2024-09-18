import React, { useState } from "react"
import { ColorPicker } from "@douyinfe/semi-ui"
import "./App.css"

function App() {
	const [color, setColor] = useState(ColorPicker.colorStringToValue("#fff"))
	const [backgroundColor, setBackgroundColor] = useState("#2E4A91")

	const [value, setValue] = useState(
		ColorPicker.colorStringToValue("#39c5bb")
	)

	const handleBackgroundColorChange = (val) => {
		setBackgroundColor(val.hex)
	}

	const handleColorChange = (val) => {
		setColor(val.hex)
	}

	return (
		<div className="container">
			<div className="wrapper">
				<div
					className="poster"
					style={{
						backgroundColor: backgroundColor,
						color: color,
					}}
				>
					<div>只道</div>
					<div>寻常</div>
				</div>
			</div>
			<div className="right">
				<ColorPicker
					alpha={true}
					onChange={handleBackgroundColorChange}
					height={200}
					width={200}
				/>

				<ColorPicker
					alpha={true}
					onChange={handleColorChange}
					height={200}
					width={200}
				/>
			</div>
		</div>
	)
}

export default App
