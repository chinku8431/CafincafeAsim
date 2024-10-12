from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

hashed_password = "$2b$12$KIXx5o1HHv2MO7DeuIxWWOrYH5bpIbIXhUudfgEwwVHrWFPfuS.Au"
password = "password"

print(pwd_context.verify(password, hashed_password)) 
# import bcrypt
# print(bcrypt.__version__)  # This should print the version of bcrypt installed
