const env = {
  DATABASE_URL:
    process.env.DATABASE_URL ||
    'postgresql://astralprojection:@localhost:5432/ki-technical',
}

export default env
