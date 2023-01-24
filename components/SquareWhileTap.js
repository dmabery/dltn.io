import { motion } from "framer-motion"

export default function SquareWhileTap(props) {
    return (
        <div className="flex mx-auto justify-between">
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#191919",
                    cursor: "pointer",
                    margin: 5,
                }}
                whileTap={{ rotate: 90, scale: 0.75, backgroundColor: '#191919' }}
            />
                 <motion.div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#191919",
                    cursor: "pointer",
                    margin: 5,
                }}
                whileTap={{ rotate: 90, scale: 1.5, backgroundColor: '#191919' }}
            />
        </div>
    )
}