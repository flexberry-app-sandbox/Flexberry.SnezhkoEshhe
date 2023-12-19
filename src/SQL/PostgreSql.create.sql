




CREATE TABLE РегистЗаписи (
 primaryKey UUID NOT NULL,
 Время VARCHAR(255) NULL,
 Дата TIMESTAMP(3) NULL,
 КодЗаписи INT NULL,
 Сумма DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Автомобиль (
 primaryKey UUID NOT NULL,
 ГосНомер VARCHAR(255) NULL,
 ТипАвтомобиля VARCHAR(8) NULL,
 Цвет VARCHAR(255) NULL,
 Марка UUID NOT NULL,
 Клиент UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СоставЗаписи (
 primaryKey UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 Услуга UUID NOT NULL,
 Запись UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Оплата (
 primaryKey UUID NOT NULL,
 Оплачено BOOLEAN NULL,
 ТипОплаты VARCHAR(11) NULL,
 Запись UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должность (
 primaryKey UUID NOT NULL,
 КодДолжности INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 ДатаРождения TIMESTAMP(3) NULL,
 Имя VARCHAR(255) NULL,
 КодСотрудника INT NULL,
 НомерТелефона INT NULL,
 Отчество VARCHAR(255) NULL,
 Фамилия VARCHAR(255) NULL,
 Должность UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Запись (
 primaryKey UUID NOT NULL,
 Время VARCHAR(255) NULL,
 Дата TIMESTAMP(3) NULL,
 КодЗаписи INT NULL,
 Комментарий VARCHAR(255) NULL,
 Сумма DOUBLE PRECISION NULL,
 Бокс UUID NOT NULL,
 Клиент UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Клиент (
 primaryKey UUID NOT NULL,
 ДатаРождения TIMESTAMP(3) NULL,
 Имя VARCHAR(255) NULL,
 КодКлиента INT NULL,
 НомерТелефона INT NULL,
 Отчество VARCHAR(255) NULL,
 Фамилия VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СоставУслуги (
 primaryKey UUID NOT NULL,
 Единицы VARCHAR(2) NULL,
 Количество INT NULL,
 Материалы UUID NOT NULL,
 Услуга UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Материалы (
 primaryKey UUID NOT NULL,
 КодДетали INT NULL,
 Наименование VARCHAR(255) NULL,
 Производитель UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Производитель (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Бокс (
 primaryKey UUID NOT NULL,
 НомерБокса VARCHAR(255) NULL,
 Площадь INT NULL,
 ТипАвтомобиля VARCHAR(8) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Марка (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Название VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Услуга (
 primaryKey UUID NOT NULL,
 ДлительностьМин INT NULL,
 КодУслуги INT NULL,
 Наименование VARCHAR(255) NULL,
 Цена DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Автомобиль ADD CONSTRAINT FK3b38598c1fe1df974e0912b3f0308ae01bff6da6 FOREIGN KEY (Марка) REFERENCES Марка; 
CREATE INDEX Index3b38598c1fe1df974e0912b3f0308ae01bff6da6 on Автомобиль (Марка); 

 ALTER TABLE Автомобиль ADD CONSTRAINT FK0bda80eb3c131601a25143e493c831cff0c7c11b FOREIGN KEY (Клиент) REFERENCES Клиент; 
CREATE INDEX Index0bda80eb3c131601a25143e493c831cff0c7c11b on Автомобиль (Клиент); 

 ALTER TABLE СоставЗаписи ADD CONSTRAINT FK7e3630b92d45d7e1d340623a1ba8fc70e1383678 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index7e3630b92d45d7e1d340623a1ba8fc70e1383678 on СоставЗаписи (Сотрудники); 

 ALTER TABLE СоставЗаписи ADD CONSTRAINT FK9c3d6c24bd4d43d47a9cceba6dc762c65627b59f FOREIGN KEY (Услуга) REFERENCES Услуга; 
CREATE INDEX Index9c3d6c24bd4d43d47a9cceba6dc762c65627b59f on СоставЗаписи (Услуга); 

 ALTER TABLE СоставЗаписи ADD CONSTRAINT FK170d3687eb4637415e4b62c8dc38946db14bf4bc FOREIGN KEY (Запись) REFERENCES Запись; 
CREATE INDEX Index170d3687eb4637415e4b62c8dc38946db14bf4bc on СоставЗаписи (Запись); 

 ALTER TABLE Оплата ADD CONSTRAINT FK3363b8df38226ca33cc1192a55ffbf29045eeb10 FOREIGN KEY (Запись) REFERENCES Запись; 
CREATE INDEX Index3363b8df38226ca33cc1192a55ffbf29045eeb10 on Оплата (Запись); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FKdb12690da9c19a13f60fc28ce9dc5fcfae00ada9 FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Indexdb12690da9c19a13f60fc28ce9dc5fcfae00ada9 on Сотрудники (Должность); 

 ALTER TABLE Запись ADD CONSTRAINT FK2ad6c47514d502601ee0cca2577a105e1146528a FOREIGN KEY (Бокс) REFERENCES Бокс; 
CREATE INDEX Index2ad6c47514d502601ee0cca2577a105e1146528a on Запись (Бокс); 

 ALTER TABLE Запись ADD CONSTRAINT FK1dc3b24c817a0a523cd77286bc23d0b7625c5ac7 FOREIGN KEY (Клиент) REFERENCES Клиент; 
CREATE INDEX Index1dc3b24c817a0a523cd77286bc23d0b7625c5ac7 on Запись (Клиент); 

 ALTER TABLE Запись ADD CONSTRAINT FK01ac6d959575847ba268a23c487172df89492731 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index01ac6d959575847ba268a23c487172df89492731 on Запись (Сотрудники); 

 ALTER TABLE СоставУслуги ADD CONSTRAINT FKacd3f69c001c1b52201092336a6bc6c743d8c338 FOREIGN KEY (Материалы) REFERENCES Материалы; 
CREATE INDEX Indexacd3f69c001c1b52201092336a6bc6c743d8c338 on СоставУслуги (Материалы); 

 ALTER TABLE СоставУслуги ADD CONSTRAINT FK2a99a3673f1870cd631bc19658d8cc2fb8e257f7 FOREIGN KEY (Услуга) REFERENCES Услуга; 
CREATE INDEX Index2a99a3673f1870cd631bc19658d8cc2fb8e257f7 on СоставУслуги (Услуга); 

 ALTER TABLE Материалы ADD CONSTRAINT FKcc609d77bb8c18e24eb4b6afb16ab56fb92e8fd9 FOREIGN KEY (Производитель) REFERENCES Производитель; 
CREATE INDEX Indexcc609d77bb8c18e24eb4b6afb16ab56fb92e8fd9 on Материалы (Производитель); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

