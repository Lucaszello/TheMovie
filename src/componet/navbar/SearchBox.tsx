import { Box, Input } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import {useState , FormEvent} from "react"
const SearchBox = ({placeholder } : {placeholder : string}) => {
  //navigate
  const navigate = useNavigate();

  //onChange
  const [value, setValue] = useState<string>("");

    const handleSubmit = (e : FormEvent<HTMLFormElement> ) => {
            e.preventDefault();
            navigate(`/${placeholder}/search/${value}`)
            setValue('')
        }
        
    
  return (
    <form onSubmit={handleSubmit} action="">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{
          marginLeft: 8,
          "& > input": {
            backgroundColor: "#25262b",
            color: "#f5f5f5 ",
            borderColor: "#373a40",
          },
        }}
        placeholder={`Search ${placeholder}...`}
        rightSection={
          <Box component="button" sx={{border : "none" , backgroundColor : "transparent" , cursor : "pointer"}}>
            <IoSearch style={{ color: "#f5f5f5", fontSize: 20 }} />
          </Box>
        }
      />
    </form>
  );
}

export default SearchBox