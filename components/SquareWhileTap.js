import { motion } from "framer-motion"

export default function SquareWhileTap(props) {
    return (
        <div className="flex mx-auto">
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    margin: 5,
                }}
                whileTap={{ rotate: 90, scale: 0.75, backgroundColor: '#f5f5f5' }}
            />
                 <motion.div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    margin: 5,
                }}
                whileTap={{ rotate: 90, scale: 1.5, backgroundColor: '#f5f5f5' }}
            />
        </div>
    )
}