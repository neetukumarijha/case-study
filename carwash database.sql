CREATE TABLE [dbo].[Admin](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[emailId] [varchar](50) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[password] [varchar](50) NOT NULL)

	CREATE TABLE [dbo].[CarDetails](
	[emailId] [varchar](50) NOT NULL,
	[name] [varchar](50) NULL,
	[contactNumber] [varchar](50) NULL,
	[carModel] [varchar](50) NULL,
	[carType] [varchar](50) NULL,
	[serviceType] [varchar](50) NULL,
	[preferredTime] [varchar](50) NULL,
	[message] [varchar](50) NULL,
	[address] [varchar](100) NULL,
	[subscription] [varchar](50) NULL)

	CREATE TABLE [dbo].[Carservice_Feedback](
	[feedback_id] [int] IDENTITY(1,1) NOT NULL,
	[First_Name] [varchar](50) NOT NULL,
	[Rating_Value] [decimal](10, 0) NOT NULL,
	[feedback_comments] [varchar](200) NOT NULL)

	CREATE TABLE [dbo].[Customer](
	[emailId] [varchar](50) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[password] [varchar](50) NOT NULL)

	CREATE TABLE [dbo].[ServiceLogin](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[emailId] [varchar](50) NOT NULL,
	[password] [varchar](50) NOT NULL)