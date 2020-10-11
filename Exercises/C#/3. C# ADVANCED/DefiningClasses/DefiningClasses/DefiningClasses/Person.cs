﻿

namespace DefiningClasses
{
   public class Person
    {
		private int age;

		private string name;

		public Person (string name, int age)
		{
			this.Name = name;
			this.Age = age;
		}

		public string Name
		{
			get { return name; }
			set { name = value; }
		}

		public int Age
		{
			get { return age; }
			set { age = value; }
		}

		public override string ToString()
		{
			return $"{this.name} - {this.age}";
		}
	}
}
