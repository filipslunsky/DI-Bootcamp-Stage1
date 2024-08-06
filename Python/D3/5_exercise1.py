sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}

# print(sample_dict["class"]["student"]["marks"]["history"])
# it can be done in one line but it is dirty

class_key_vals = sample_dict["class"]
student_key_vals = class_key_vals["student"]
marks_key_vals = student_key_vals["marks"]

print(marks_key_vals["history"])

print(sample_dict.key()) # displays keys on a given level, not nested keys, works similarly to "ls" in shell


